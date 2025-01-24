import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <div className="px-12 w-full h-full">
      <Navbar />
      <section>
      <LandingPage />
      </section>
    </div>
  );
}
