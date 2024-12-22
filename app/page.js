import Image from "next/image";
import { Navbar } from "./components/Landingpage";
import { Hero } from "./components/Hero";
import FlareCursor from "./components/Cursor";
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <div className="home bg-[#2A2323] h-[100vh] absolute">
    <FlareCursor />
    <Navbar />
    <Hero />
    <Footer />

    </div>
  );
}
