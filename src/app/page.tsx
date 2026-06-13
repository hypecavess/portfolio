import NowPlayingBar from "./components/NowPlayingBar";
import BentoGrid from "./components/BentoGrid";
import RollingText from "./components/RollingText";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Now from "./components/Now";
import GithubGrid from "./components/GithubGrid";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">

      <div className="min-h-screen w-full flex items-center justify-center pt-24 pb-24">
        <BentoGrid />
      </div>

      <RollingText />

      <Technologies />

      <Projects />

      <Now />

      <GithubGrid />

      <CTA />

      <div className="h-[10vh] w-full" />

      <NowPlayingBar />

    </div>
  );
}
