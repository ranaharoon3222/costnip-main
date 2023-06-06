import { useRouter } from 'next/router';
import UploadResources from '@/components/FindResouces/UploadResources';
import PaymentAssistance from '@/components/PaymentAssistance/PaymentAssistance';
import React, { useState, useEffect } from 'react';
import slugify from 'slugify';
import Loading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';

const PaymentAssistances = () => {
  const router = useRouter();

  const page = router.query['pagination[page]'] || 1;
  const pageSize = router.query['pagination[pageSize]'] || 30;

  const { data, isLoading, error } = useFetcher(
    `/api/resources?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
  const [resources, setResources] = useState(data?.data);
  const slug = slugify(router?.query?.slug || '', '-');

  useEffect(() => {
    if (slug === 'all') {
      setResources(data?.data);
    } else {
      const filter = data?.data.filter(
        (item) =>
          slugify(item.attributes.resource_category.data.attributes.name) ===
          slug
      );
      setResources(filter);
    }
  }, [data, page]);

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
    <>
      <PaymentAssistance slug={slug} data={resources} meta={data.meta} />
      <UploadResources />
    </>
  );
};

export default PaymentAssistances;
