import About from "./sections/about";
import Hero from "./sections/hero";
import Info from "./sections/info";
import Trainers from "./sections/trainers";

export default function Home() {
  return (
    <main className="*:my-10 width-responsive">
      <Hero />
      <Info />
      <About />
      <Trainers />
    </main>
  );
}
