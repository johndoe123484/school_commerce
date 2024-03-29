'use client'
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Galery from "@/components/Galery/Galery";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Programs from "@/components/Programs/Programs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Title from "@/components/Title/Title";
import Title2 from "@/components/Title2/Title2";
import Title3 from "@/components/Title3/Title3";
import Title4 from "@/components/Title4/Title";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { useEffect, useState } from "react";

export default function Home() {

  const [playState, setPlayState] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title2 />
        <Galery />
        <Title3 />
        <Testimonials />
        <Title4 />
        <Contact />
      </div>
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}
