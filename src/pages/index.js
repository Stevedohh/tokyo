
import { Inter } from "next/font/google";
import Slider from "./components/Slider";
import Home_Owl from "./components/Home_Owl";
import Features from "./components/Features";
import About from "./components/About";
import Service from "./components/Service";
import FAQs from "./components/FAQs";
import Blog from "./components/Blog";
import Team from "./components/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className="d-block">
     <Slider/>
     <Features/>
      <About/>
      <Service/>
      <FAQs/>
      <Blog/>
      <Team/>
     <Home_Owl/>
     </div>
    </>
  );
}
