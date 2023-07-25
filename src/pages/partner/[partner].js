import Loading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Blog = () => {
  const router = useRouter();
  const partner = router.query.partner;

  console.log('partner', partner);

  const { getUrl } = useMedia();

  const { data, isLoading, error } = useFetcher(
    `/api/partners?filters[slug][$eq]=${partner}&populate=*`
  );

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

  //   console.log('latest partner',data);

  return (
    <>
      <div className='w-full max-w-screen-lg mx-[auto] '>
        <div className='pl-4 text-5xl font-black'>
          {' '}
          <Link href='/partnership'> &#8592; </Link>{' '}
        </div>

        <h1 className='px-2 text-2xl font-bold md:px-6'>
          {data.data[0].attributes.title}
        </h1>

        <img
          className='py-6 w-[1000px] object-cover h-[500px] mx-[auto] '
          src={getUrl(data.data[0].attributes.image)}
          alt='image'
        />
        <div
          className='patnr-umr'
          dangerouslySetInnerHTML={{ __html: data.data[0].attributes.body }}
        />
      </div>
    </>
  );
};

export default Blog;
