import Email from '@/components/email';
import Loading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const Patnership = () => {
  const { getUrl } = useMedia();

  const { data, isLoading, error } = useFetcher('/api/partners?populate=*');

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;
  // console.log(data)

  return (
    <>
      <div>
        <img className='w-[300px] mx-[auto]' src='contact.png' alt='image' />
      </div>

      <h1 className='py-12 text-3xl font-bold text-center text-purple-900'>
        Get Involved
      </h1>

      <p className='text-sm w-full max-w-screen-xl mx-[auto] text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
        fugiat expedita porro eius laudantium sunt iure, amet praesentium illum.
        Velit mollitia similique cum. Maiores assumenda libero eos, numquam
        saepe dolore eaque unde?
      </p>

      {/* //////////card//////////////////////////// */}
      <div className='grid grid-cols-1 md:grid-cols-3 w-full max-w-screen-xl mx-[auto] my-16'>
        {data?.data?.map((item) => {
          // console.log('id',item.id)
          return (
            <div key={item.id} className='p-12 text-center'>
              <div className=' mx-[auto] shadow-lg rounded-lg'>
                <img
                  className='min-h-[250px] max-h-[250px] mx-[auto]'
                  src={getUrl(item.attributes.image)}
                  alt=''
                />
                <h3 className='py-4 font-semibold text-center text-purple-950'>
                  {item.attributes.title}
                </h3>

                <div className='flex justify-between pt-2 border-t-[1px] border-solid border-[#E0DBDB]'>
                  <Link
                    href={`/partner/${item.id}`}
                    className='flex items-center gap-3 px-6 py-3 text-sm font-medium text-darkBlue'
                  >
                    Read More <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* //////////card//////////////////////////// */}

      <Email />
    </>
  );
};

export default Patnership;
