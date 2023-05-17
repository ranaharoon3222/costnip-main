import styles from '@/styles/styles';
import Link from 'next/link';
import React from 'react';
import { useFetcher } from '@/helpers/fetch';
import Loading from '@/components/loding';
import slugify from 'slugify';

const ResourcesAndTools = () => {
  const { data, isLoading, error } = useFetcher('/api/resource-categories');

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
    <div
      className={`md:w-3/5 m-auto py-10 md:py-20 ${styles.padding} bg-[#F8FAFB] md:bg-transparent`}
    >
      <h5 className='text-[#323232] font-semibold text-xl md:text-2xl mb-2'>
        All Resources and Tools
      </h5>
      <ul className='text-[#81B4B5] flex flex-col gap-2 text-sm'>
        <li>
          <Link href='/all'> All </Link>
        </li>
        {data.data.map((item) => {
          return (
            <li>
              <Link href={`/resources/${slugify(item.attributes.name, '-')}`}>
                {item.attributes.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResourcesAndTools;
