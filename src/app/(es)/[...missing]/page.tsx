import { notFound } from "next/navigation";

// With no layout at the app root, unmatched URLs need a route inside a root layout to get its not-found.
export default function CatchAll() {
  notFound();
}
