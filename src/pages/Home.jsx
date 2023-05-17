import Animation from "@/components/home/Animation";
import Chatbot from "@/components/home/Chatbot";
import CompareServices from "@/components/home/CompareServices";
import HealthSpotlight from "@/components/home/HealthSpotlight";
import Hero from "@/components/home/Hero";
import MedicalSpecialities from "@/components/home/MedicalSpecialities";
import Process from "@/components/home/Process";
import ResourceLibrary from "@/components/home/ResourceLibrary";
import ShareCharges from "@/components/home/ShareCharges";
import Testimonials from "@/components/home/Testimonials";
import VideoPreview from "@/components/home/VideoPreview";
import React from "react";

const Home = () => {
  return (
    <>
    <Hero/>
    <CompareServices/>
    <VideoPreview/>
    <MedicalSpecialities/>
    <Animation/>
    <Process/>
    <HealthSpotlight/>
    <ShareCharges/>
    <Chatbot/>
    <Testimonials/>
    <ResourceLibrary/>
    </>
  );
};

export default Home;
