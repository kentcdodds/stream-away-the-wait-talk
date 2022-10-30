import type { LoaderArgs, SerializeFrom } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import clsx from "clsx";
import { useCombobox } from "downshift";
import { useId, useState } from "react";
import { useSpinDelay } from "spin-delay";
import invariant from "tiny-invariant";
import { LabelText, SpinnerIcon } from "~/components";
import { searchCustomers } from "~/models/customer.server";
import { requireUser } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  await requireUser(request);
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  invariant(typeof query === "string", "query is required");
  return json({
    customers: await searchCustomers(query),
  });
}

export function CustomerCombobox({ error }: { error?: string | null }) {
  const customerFetcher = useFetcher<SerializeFrom<typeof loader>>();
  const id = useId();
  const customers = customerFetcher.data?.customers ?? [];
  type Customer = typeof customers[number];
  const [selectedCustomer, setSelectedCustomer] = useState<
    Customer | null | undefined
  >(null);

  const cb = useCombobox<Customer>({
    id,
    onSelectedItemChange: ({ selectedItem }) => {
      setSelectedCustomer(selectedItem);
    },
    items: customers,
    itemToString: (item) => (item ? item.name : ""),
    onInputValueChange: (changes) => {
      customerFetcher.submit(
        { query: changes.inputValue ?? "" },
        { method: "get", action: "/resources/customers" }
      );
    },
  });

  const busy = customerFetcher.state !== "idle";
  const showSpinner = useSpinDelay(busy, {
    delay: 150,
    minDuration: 300,
  });
  const displayMenu = cb.isOpen && customers.length > 0;

  return (
    <div className="relative">
      <input
        name="customerId"
        type="hidden"
        value={selectedCustomer?.id ?? ""}
      />
      <div className="flex flex-wrap items-center gap-1">
        <label {...cb.getLabelProps()}>
          <LabelText>Customer</LabelText>
        </label>
        {error ? (
          <em id="customer-error" className="text-d-p-xs text-red-600">
            {error}
          </em>
        ) : null}
      </div>
      <div className="relative">
        <input
          {...cb.getInputProps({
            className: clsx("text-lg w-full border border-gray-500 px-2 py-1", {
              "rounded-t rounded-b-0": displayMenu,
              rounded: !displayMenu,
            }),
            "aria-invalid": Boolean(error) || undefined,
            "aria-errormessage": error ? "customer-error" : undefined,
          })}
        />
        <div
          className={`absolute right-[5px] top-[5px] animate-spin transition-opacity ${
            showSpinner ? "opacity-100" : "opacity-0"
          }`}
        >
          <SpinnerIcon />
        </div>
      </div>
      <ul
        {...cb.getMenuProps({
          className: clsx(
            "absolute z-10 bg-white shadow-lg rounded-b w-full border border-t-0 border-gray-500 max-h-[180px] overflow-scroll",
            { hidden: !displayMenu }
          ),
        })}
      >
        {displayMenu
          ? customers.map((customer, index) => (
              <li
                className={clsx("cursor-pointer py-1 px-2", {
                  "bg-green-200": cb.highlightedIndex === index,
                })}
                key={customer.id}
                {...cb.getItemProps({ item: customer, index })}
              >
                {customer.name} ({customer.email})
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
