import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useCatch, useLoaderData, useParams } from "@remix-run/react";
import { ErrorFallback } from "~/components";
import {
  getCustomerInfo,
  getCustomerInvoiceDetails,
} from "~/models/customer.server";
import { requireUser } from "~/session.server";
import { currencyFormatter } from "~/utils";

type LoaderData = {
  customerInfo: Awaited<ReturnType<typeof getCustomerInfo>>;
  invoiceDetails: NonNullable<
    Awaited<ReturnType<typeof getCustomerInvoiceDetails>>
  >;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  await requireUser(request);
  const { customerId } = params;
  if (typeof customerId !== "string") {
    throw new Error("This should be unpossible.");
  }
  return json<LoaderData>({
    customerInfo: await getCustomerInfo(customerId),
    invoiceDetails: await getCustomerInvoiceDetails(customerId),
  });
};

const lineItemClassName = "border-t border-gray-100 text-[14px] h-[56px]";

export default function CustomerRoute() {
  const data = useLoaderData() as LoaderData;

  return (
    <div className="relative p-10">
      <div className="text-[length:14px] font-bold leading-6">
        {data.customerInfo.email}
      </div>
      <div className="text-[length:32px] font-bold leading-[40px]">
        {data.customerInfo.name}
      </div>
      <div className="h-4" />
      <div className="text-m-h3 font-bold leading-8">Invoices</div>
      <div className="h-4" />
      <table className="w-full">
        <tbody>
          {data.invoiceDetails.map((details) => (
            <tr key={details.id} className={lineItemClassName}>
              <td>
                <Link
                  className="text-blue-600 underline"
                  to={`../../invoices/${details.id}`}
                >
                  {details.number}
                </Link>
              </td>
              <td
                className={
                  "text-center uppercase" +
                  " " +
                  (details.dueStatus === "paid"
                    ? "text-green-brand"
                    : details.dueStatus === "overdue"
                    ? "text-red-brand"
                    : "")
                }
              >
                {details.dueStatusDisplay}
              </td>
              <td className="text-right">
                {currencyFormatter.format(details.totalAmount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();

  if (caught.status === 404) {
    return (
      <div className="relative h-full">
        <ErrorFallback
          message={`No customer found with the ID of "${params.customerId}"`}
        />
      </div>
    );
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
