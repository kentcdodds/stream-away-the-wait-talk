import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { requireUser } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  await requireUser(request);
  return json({});
}

export default function ExpensesRoute() {
  return <div>Hope you don't have a lot of these...</div>;
}
