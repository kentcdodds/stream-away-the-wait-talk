import type { Customer } from "@prisma/client";
import { prisma } from "~/db.server";
import { getInvoiceDerivedData } from "./invoice.server";
import { getUserById } from "./user.server";

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

  // remember, you wouldn't have written this code to slow down your db call
  // at all, so ignore this bit 😅
  if (customerDetails?.name !== "Ocean Avenue") {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 1000 + 1500)
    );
  }
  return customerDetails?.invoiceDetails ?? [];
}

// This is contrived. Just pretend that you have some situations where this
// database call is faster and you can know that based on some other
// information about the data you have on hand.
// For example, maybe you have a count of how much data needs to be retrieved
// or you have an idea of how expensive a calculation it will be due to the
// length of a file or video or something.
export async function shouldDeferInvoices({
  customerId,
  userId,
}: {
  customerId: string;
  userId: string;
}) {
  const [customerDetails, user] = await Promise.all([
    getCustomerInfo(customerId),
    getUserById(userId),
  ]);

  if (user?.email === "patience@remix.run") return false;
  if (customerDetails.name === "Ocean Avenue") return false;

  return true;
}
