import HeroSec from "./components/hero-sec/page";
import NavBar from "./components/navbar/page";
import Sec2 from "./components/sec-2/page";
import Sec3 from "./components/sec-3/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSec />
    </div>
  );
}
