import BackgroundShapes from "@/components/background-shapes";
import NavBar from "@/components/nav-bar";

export default function Hero() {
  return (
    <section className="min-h-dvh py-10 width-responsive pt-10">
      <BackgroundShapes displayImage />
      <NavBar />
      <div className="relative bg-red-500 h-full">a</div>
    </section>
  );
}
