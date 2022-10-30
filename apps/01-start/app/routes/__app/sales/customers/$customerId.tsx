import type { LoaderArgs } from "@remix-run/node";
import { Link, useCatch, useParams } from "@remix-run/react";
import invariant from "tiny-invariant";
import { ErrorFallback } from "~/components";
import { requireUser } from "~/session.server";
import { currencyFormatter } from "~/utils";

export async function loader({ request, params }: LoaderArgs) {
  await requireUser(request);
  const { customerId } = params;
  invariant(customerId, "customerId param is required");
  return new Response("todo");
}

const lineItemClassName = "border-t border-gray-100 text-[14px] h-[56px]";

export default function CustomerRoute() {
  const data = {
    customerInfo: {
      email: "todo@todo.com",
      name: "TODO",
    },
    invoiceDetails: [
      {
        id: "todo",
        number: 0,
        dueStatus: "paid",
        dueStatusDisplay: "todo",
        totalAmount: 0,
      },
    ],
  };

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
