import Loading from "@/components/loding";
import { useFetcher } from "@/helpers/fetch";
import { useMedia } from "@/helpers/useMedia";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const partner = router.query.partner;

  console.log('partner',partner)

  const { getUrl } = useMedia();

  const { data, isLoading, error } = useFetcher("/api/partners/" + partner + "?populate=*");

  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;

//   console.log('latest partner',data);

  return (
    <>
<div className="w-full max-w-screen-lg mx-[auto] ">

  <div className="text-5xl font-black pl-4"> <a href="/patnership"> &#8592; </a> </div>

  <h1 className="px-2 md:px-6 font-bold text-2xl">{data.data.attributes.title}</h1>

      <img className="py-6 w-[1000px] object-cover h-[500px] mx-[auto] " src= {getUrl(data.data.attributes.image)} alt="image" /> 
      <div className="patnr-umr"
      dangerouslySetInnerHTML={{__html: data.data.attributes.body}}
    />
      
</div>
    
    </>
  );
};

export default Blog;
