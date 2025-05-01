import RecentWork from "@/components/recent-work";
import AboutMe from "@/components/about-me";
import { Card } from "@/components/ui/card";
import Container from "@/components/container";
import Introduction from "@/components/introduction";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Introduction />
      <AboutMe />
      <RecentWork />
      <Footer />
    </>
  );
}
