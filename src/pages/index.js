import Animation from '@/components/home/Animation';
import Chatbot from '@/components/home/Chatbot';
import CompareServices from '@/components/home/CompareServices';
import HealthSpotlight from '@/components/home/HealthSpotlight';
import Hero from '@/components/home/Hero';
import MedicalSpecialities from '@/components/home/MedicalSpecialities';
import Process from '@/components/home/Process';
import ResourceLibrary from '@/components/home/ResourceLibrary';
import ShareCharges from '@/components/home/ShareCharges';
import Testimonials from '@/components/home/Testimonials';
import VideoPreview from '@/components/home/VideoPreview';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Home = () => {
  const router = useRouter();
  const { access_token } = router.query;
  const saveUser = useStoreActions((action) => action.saveUser);

  const setUser = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/auth/google/callback?access_token=${access_token}`
      );
      const data = await res.json();

      localStorage.setItem('bill', true);
      console.log(data);
      saveUser(data.user);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (access_token) {
      setUser();
    }
  }, [access_token]);

  return (
    <>
      <Hero />
      <CompareServices />
      <VideoPreview />
      <MedicalSpecialities />
      <Animation />
      <Process />
      <HealthSpotlight />
      <ShareCharges />
      <Chatbot />
      <Testimonials />
      <ResourceLibrary />
    </>
  );
};

export default Home;
