import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SneakPeak from "./components/SneakPeak";
import { Features } from "./components/Features";
import Pricing from "./components/Pricing";
import Automation from "./components/Automation";
import BookNow from "./components/BookNow";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="px-12 w-full h-full">
      <Navbar />
      <LandingPage />
      <section>
      <SneakPeak />
      </section>
      <section className="w-full h-screen">
      <Features />
      </section>
      <section className="p-2 bg-gray-100 rounded-xl">
      <Pricing />
      </section>
      <section>
      <Automation />
      </section>
      <section>
      <BookNow />
      </section>
      <section>
      <Footer />
      </section>
    </div>
  );
}
