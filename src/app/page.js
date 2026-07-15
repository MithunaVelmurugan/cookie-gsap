import HeroSec from "./components/hero-sec/page";
import NavBar from "./components/navbar/page";
import Sec2 from "./components/sec-2/page";
import Sec3 from "./components/sec-3/page";
import Testimonials from "./components/testimonials/page";
import Footer from "./components/footer/page";
import ScrollRefresh from "./components/scroll-refresh/page";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollRefresh />
      <NavBar />
      <HeroSec />
      <Sec2 />
      <Sec3 />
      <Testimonials />
      <Footer />
    </div>
  );
}