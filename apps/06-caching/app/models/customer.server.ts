import type { Customer } from "@prisma/client";
import { prisma } from "~/db.server";
import LRU from "lru-cache";
import { getInvoiceDerivedData } from "./invoice.server";

export async function searchCustomers(query: string) {
  const customers = await prisma.customer.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  const lowerQuery = query.toLowerCase();
  return customers.filter((c) => {
    return (
      c.name.toLowerCase().includes(lowerQuery) ||
      c.email.toLowerCase().includes(lowerQuery)
    );
  });
}

export async function getFirstCustomer() {
  return prisma.customer.findFirst();
}

export async function getCustomerListItems() {
  return prisma.customer.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
}

export async function getCustomerDetails(customerId: string) {
  const customer = await prisma.customer.findUnique({
    where: { id: customerId },
    select: {
      id: true,
      name: true,
      email: true,
      invoices: {
        select: {
          id: true,
          dueDate: true,
          number: true,
          lineItems: {
            select: {
              quantity: true,
              unitPrice: true,
            },
          },
          deposits: {
            select: { amount: true },
          },
        },
      },
    },
  });
  if (!customer) return null;

  const invoiceDetails = customer.invoices.map((invoice) => ({
    id: invoice.id,
    number: invoice.number,
    ...getInvoiceDerivedData(invoice),
  }));

  return { name: customer.name, email: customer.email, invoiceDetails };
}

export async function createCustomer({
  name,
  email,
}: Pick<Customer, "name" | "email">) {
  return prisma.customer.create({ data: { email, name } });
}

export async function getCustomerInfo(customerId: string) {
  const customer = await getCustomerDetails(customerId);
  if (!customer) {
    throw new Response("not found", { status: 404 });
  }
  return { name: customer.name, email: customer.email };
}

type InvoiceDetails = NonNullable<
  Awaited<ReturnType<typeof getCustomerDetails>>
>["invoiceDetails"];

declare global {
  // This preserves the LRU cache during development
  // eslint-disable-next-line
  var invoiceDetailsCache: LRU<string, InvoiceDetails> | undefined;
}

const invoiceDetailsCache =
  global.invoiceDetailsCache ??
  (global.invoiceDetailsCache = new LRU<string, InvoiceDetails>({
    max: 1000,
    ttl: 1000 * 5,
    allowStale: true,
    fetchMethod: async (key: string) => {
      const customerDetails = await getCustomerDetails(key);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 1000 + 1500)
      );
      return customerDetails?.invoiceDetails ?? [];
    },
  }));

export async function getCustomerInvoiceDetails(customerId: string) {
  const invoiceDetails = await invoiceDetailsCache.fetch(customerId);
  return invoiceDetails;
}
