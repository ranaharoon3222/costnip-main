import React from 'react';
import { useFetcher } from '@/helpers/fetch';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Loading from '@/components/loding';
// import { Transition } from '@headlessui/react';

const Index = () => {
  const { data, isLoading, error } = useFetcher('/api/faqs');

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

  return (
    <div className='countain'>
      {/* <Head /> */}
      <div className='py-12 countain'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='m-auto clr'>
            <h1 className='text-xl font-bold'>FAQs</h1>
            <h1 className='w-full max-w-[450px]'>
              Have questions about Costnip? We might have the answers here.
              These are some common responses that may be helpful.
            </h1>
          </div>
          <div>
            <img
              className='max-w-[250px] w-full mx-[auto]'
              src='faq.png'
              alt='image'
            />
          </div>
        </div>
      </div>
      {/* <Head /> */}
      <div className='w-full max-w-screen-lg mx-[auto] px-4 py-16 countain'>
        <div className='w-full p-2 mx-auto divide-y rounded shadow-md divide-slate-200 shadow-slate-200 '>
          {data.data.map((item) => {
            return (
              <Disclosure key={item.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex justify-between w-full px-4 py-4 text-base font-medium text-left border-b border-solid outline-0'>
                      <h3> {item.attributes.title} </h3>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='px-4 pt-4 pb-2 text-base text-black'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.attributes.body,
                        }}
                      ></div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
