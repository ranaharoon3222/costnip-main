import Index from '@/components/HealthSpotlight/Filter/Index';
import HealthTopics from '@/components/HealthSpotlight/HealthTopics';
import MobileViewBlogSlides from '@/components/HealthSpotlight/MobileViewBlogSlides';
import RecentlyPublished from '@/components/HealthSpotlight/RecentlyPublished';
import Sponsored from '@/components/HealthSpotlight/Sponsored';
import Spotlight from '@/components/HealthSpotlight/Spotlight';
import React from 'react';

const health = () => {
  return (
    <>
      <Spotlight />
      <Index />
      <RecentlyPublished />
      <HealthTopics />
      <Sponsored />
    </>
  );
};

export default health;
