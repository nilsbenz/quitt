import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/activity")({
  component: () => <div>Hello /activity!</div>,
});
