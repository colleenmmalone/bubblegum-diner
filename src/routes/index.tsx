import { createFileRoute } from "@tanstack/react-router";
import Hero from "./index/hero";
import FanFavorites from "./index/fan-favorites";
import CTABlock from "./index/cta-block";
import PageContainer from "./layout/page-container";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <PageContainer>
      <Hero />
      <FanFavorites />
      <CTABlock />
    </PageContainer>
  );
}
