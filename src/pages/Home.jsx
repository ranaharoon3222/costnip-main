import React from "react";
import AboutUs from "@/components/home/AboutUs";
import Advantages from "@/components/home/Advantages";
import Benefits from "@/components/home/Benefits";
import EmpoweringWisps from "@/components/home/EmpoweringWisps";
import Footer from "@/components/home/Footer";
import FrequentQuestions from "@/components/home/FrequentQuestions";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Benefits />
      <AboutUs />
      <Advantages />
      <EmpoweringWisps />
      <FrequentQuestions />
      <Footer />
    </>
  );
};

export default Home;
