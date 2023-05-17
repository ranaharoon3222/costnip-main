import { useRouter } from 'next/router';
import UploadResources from '@/components/FindResouces/UploadResources';
import PaymentAssistance from '@/components/PaymentAssistance/PaymentAssistance';
import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import Loading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';

const paymentAssistance = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetcher('/api/resources?populate=*');
  const [resources, setResources] = useState(data?.data);
  const slug = slugify(router?.query?.slug || '', '-');

  useEffect(() => {
    const filter = data?.data.filter(
      (item) => slugify(item.attributes.name) === slug
    );
    setResources(filter);
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

  console.log(resources);

  return (
    <>
      <PaymentAssistance slug={slug} data={resources} />
      <UploadResources />
    </>
  );
};

export default paymentAssistance;
