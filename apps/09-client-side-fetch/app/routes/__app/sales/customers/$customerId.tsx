import type { LoaderArgs, SerializeFrom } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  useCatch,
  useFetcher,
  useLoaderData,
  useParams,
} from "@remix-run/react";
import { useEffect } from "react";
import invariant from "tiny-invariant";
import { ErrorFallback, InvoiceDetailsFallback } from "~/components";
import {
  getCustomerInfo,
  getCustomerInvoiceDetails,
} from "~/models/customer.server";
import { requireUser } from "~/session.server";
import { currencyFormatter } from "~/utils";

async function loadCustomerInvoiceDetails(customerId: string) {
  return json({
    invoiceDetails: await getCustomerInvoiceDetails(customerId),
  });
}

async function loadCustomerInfo(customerId: string) {
  return json({
    customerInfo: await getCustomerInfo(customerId),
  });
}

export async function loader({ request, params }: LoaderArgs) {
  await requireUser(request);
  const { customerId } = params;
  invariant(customerId, "customerId param is required");
  if (new URL(request.url).searchParams.get("invoiceDetails")) {
    return loadCustomerInvoiceDetails(customerId);
  } else {
    return loadCustomerInfo(customerId);
  }
}

const lineItemClassName = "border-t border-gray-100 text-[14px] h-[56px]";

export default function CustomerRoute() {
  const data = useLoaderData<typeof loadCustomerInfo>();
  const params = useParams();
  const { load: loadInvoiceDetails, ...invoiceDetailsFetcher } =
    useFetcher<SerializeFrom<typeof loadCustomerInvoiceDetails>>();

  useEffect(() => {
    loadInvoiceDetails(
      `/sales/customers/${params.customerId}?invoiceDetails=true`
    );
  }, [loadInvoiceDetails, params.customerId]);

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
      {invoiceDetailsFetcher.state === "idle" && invoiceDetailsFetcher.data ? (
        <table className="w-full">
          <tbody>
            {invoiceDetailsFetcher.data.invoiceDetails.map((details) => (
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
      ) : (
        <InvoiceDetailsFallback />
      )}
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
