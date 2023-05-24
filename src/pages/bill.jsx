import HowBillWorks from '@/components/Bill/HowBillWorks';
import UploadAccount from '@/components/Bill/UploadAccount';
import UploadBills from '@/components/Bill/UploadBills';
import React from 'react';

const bill = () => {
  return (
    <>
      <HowBillWorks />
      <UploadBills />
      <UploadAccount />
    </>
  );
};

export default bill;
