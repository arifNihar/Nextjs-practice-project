import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Navbar from "@/components/Navbar";
import NewNav from "@/components/NewNav";
import { Link } from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
