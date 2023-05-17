import UploadResources from '@/components/FindResouces/UploadResources';
import Navbar from '@/components/Navbar';
import PaymentAssistance from '@/components/PaymentAssistance/PaymentAssistance';
import React from 'react';

const paymentAssistance = () => {
  return (
    <>
      <PaymentAssistance />
      <UploadResources />
    </>
  );
};

export default paymentAssistance;
