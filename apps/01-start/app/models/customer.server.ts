import type { Customer } from "@prisma/client";
import { prisma } from "~/db.server";
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

export async function getCustomerInvoiceDetails(customerId: string) {
  const customerDetails = await getCustomerDetails(customerId);
  return customerDetails?.invoiceDetails ?? [];
}
