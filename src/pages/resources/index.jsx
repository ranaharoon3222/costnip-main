import Banner from '@/components/FindResouces/Banner';
import ResourcesAndTools from '@/components/FindResouces/ResourcesAndTools';
import UploadResources from '@/components/FindResouces/UploadResources';
import Navbar from '@/components/Navbar';
import React from 'react';

const findResources = () => {
  return (
    <>
      <Banner />
      <ResourcesAndTools />
      <UploadResources />
    </>
  );
};

export default findResources;
