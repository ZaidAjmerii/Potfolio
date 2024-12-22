import Image from "next/image";
import { Navbar } from "./components/Landingpage";
import { Hero } from "./components/Hero";
import FlareCursor from "./components/cursor";
import { Footer } from "./components/footer";


export default function Home() {
  return (
    <div className="home bg-[#2A2323] h-[100vh]">
    <FlareCursor />
    <Navbar />
    <Hero />
    <Footer />

    </div>
  );
}
