import BackgroundShapes from "@/components/background-shapes";
import NavBar from "@/components/nav-bar";

export default function Hero() {
  return (
    <section className="min-h-dvh relative">
      <BackgroundShapes displayImage />
      <NavBar />
      <div className="relative width-responsive"></div>
    </section>
  );
}
