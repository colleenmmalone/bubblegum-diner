import { createFileRoute } from "@tanstack/react-router";
import PageContainer from "./layout/page-container";
import PageTitle from "./layout/page-title";

export const Route = createFileRoute("/merch")({ component: Merch });

function Merch() {
  return (
    <PageContainer>
      <PageTitle
        title="Merch"
        subtitle="Check out our vintage-style merchandise!"
      />
    </PageContainer>
  );
}
