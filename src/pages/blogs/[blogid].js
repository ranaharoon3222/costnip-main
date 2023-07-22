import Loading from '@/components/loding';
import { useFetcher } from '@/helpers/fetch';
import { useMedia } from '@/helpers/useMedia';
import { useRouter } from 'next/router';
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

const Blog = () => {
  const router = useRouter();
  const blogid = router.query.blogid;

  const { getUrl } = useMedia();

  const { data, isLoading, error } = useFetcher(
    `/api/blogs?filters[slug][$eq]=${blogid}&populate=*`
  );

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

  // console.log('latest', data.data.attributes.title);

  ////////disqus/////////////////////////
  const disqusShortname = 'websolave';
  const disqusConfig = {
    url: location.href,
    identifier: blogid, // Single post id
    title: data.data[0].attributes.title, // Single post title
  };
  ////////disqus/////////////////////////

  return (
    <>
      <div className='w-full max-w-screen-lg mx-[auto] '>
        {/* <h1 className='px-2 text-2xl font-bold md:px-6'>
          {data.data.attributes.title}
        </h1> */}

<div className="text-5xl font-black pl-4"> <Link href="/health"> &#8592; </Link> </div>

        <h1 className='px-2 pt-10 text-3xl font-bold '>
          {data.data[0].attributes.title}
        </h1>

        <img
          className='py-6 w-[1000px] object-cover h-[500px] mx-[auto] '
          src={getUrl(data.data[0].attributes.thumbnail)}
          alt='image'
        />

        <h1 className='pl-2'>Written by : {data.data[0].attributes.author}</h1>
      </div>

      <div className='fixed bottom-10 left-10'>
        <FacebookShareButton
          url={location.href}
          quote={'Dummy text!'}
          className='block mb-2'
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={'location.href'}
          quote={'Dummy text!'}
          className='block mb-2'
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={'location.href'}
          quote={'Dummy text!'}
          className='block mb-2'
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>

      <div className='blogs'>
        <div
          className='w-full max-w-screen-lg mx-[auto] pt-6 pb-12 px-2 '
          dangerouslySetInnerHTML={{ __html: data.data[0].attributes.text }}
        />
      </div>

      {/* //////////////////////disqus/////////////// */}
      <div className='w-full max-w-screen-lg mx-[auto]'>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
      {/* //////////////////////disqus/////////////// */}
    </>
  );
};

export default Blog;
