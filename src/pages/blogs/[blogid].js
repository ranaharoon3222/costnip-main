import Loading from "@/components/loding";
import { useFetcher } from "@/helpers/fetch";
import { useMedia } from "@/helpers/useMedia";
import { useRouter } from "next/router";
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const Blog = () => {
  const router = useRouter();
  const blogid = router.query.blogid;

  const { getUrl } = useMedia();

  const { data, isLoading, error } = useFetcher(
    '/api/blogs/' + blogid + '?populate=*'
  );

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

  console.log('latest', data);

  return (
    <>
      <div className='w-full max-w-screen-lg mx-[auto] '>
        <h1 className='px-2 text-2xl font-bold md:px-6'>
          {data.data.attributes.title}
        </h1>

  <h1 className="px-2 md:px-6 font-bold text-2xl">{data.data.attributes.title}</h1>

      <img className="py-6 w-[1000px] object-cover h-[500px] mx-[auto] " src= {getUrl(data.data.attributes.thumbnail)} alt="image" /> 
</div>
<div className="fixed bottom-10 left-10">
      <FacebookShareButton
        url={location.href}
        quote={'Dummy text!'}
        hashtag="#muo"
        className="mr-2"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
  url={'location.href'}
  quote={'Dummy text!'}
  hashtag="#muo"
>
  <TwitterIcon size={32} round />
</TwitterShareButton>
    </div>
          <div className="blogs">
      <div className="w-full max-w-screen-lg mx-[auto] pt-6 pb-12 px-2 md:px-8"
      dangerouslySetInnerHTML={{__html: data.data.attributes.text}}
    />
</div>

    </>
  );
};

export default Blog;
