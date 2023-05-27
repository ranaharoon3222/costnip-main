import React from "react";
import styles from "@/styles/styles";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import FilterResults from "./FilterResults";
import Link from "next/link";
import { useFetcher } from "@/helpers/fetch";

const Index = () => {



    ////////////////////////fetchAPI//////////////////
  
    const { data, isLoading, error } = useFetcher('/api/blog-sections?populate=*');

    if (isLoading) return <h1>Wait......</h1>;
  
    if (error) return <h1>Error</h1>;

   

    console.log("here",data)
  
    ////////////////////////fetchAPI//////////////////
  




  return (
    <div className={`${styles.padding} md:w-3/4 m-auto py-10`}>
      <div className="flex justify-center md:justify-end">
        <span className="hidden md:flex bg-primary font-medium px-10 rounded-xl py-2 text-[#555555] text-sm items-center gap-5">
          Discover news, articles an more.
        </span>
        <div className="w-full flex md:hidden text-sm items-center gap-2 relative">
          <AiOutlineSearch className="text-[#616161] absolute top-[16px] left-[20px] text-base" />
          <input
            type="text"
            placeholder="Search Blog"
            className="text-[#616161] font-medium bg-[#FAFAFA] pl-10 px-5 py-3 rounded-xl border-[1px] border-solid border-[#EDE7F6]"
          />
        </div>
       
      </div>

      <div className="flex gap-6 flex-wrap my-9">
        
    {
      data?.data?.map((ele)=>{
        return(
          <>
          <span className="bg-[#F1F5F9] px-6 py-3 rounded-lg text-[#252B61] text-sm md:text-base capitalize">{ele.attributes.title}</span>
          </>
        )
      })
    }
        
      </div>

      <div className="relative">
        <FilterResults />

        <div className="hidden md:block absolute top-[52%] right-[-10%]">
          <Link href="/" className={styles.viewLink}>
            VIEW ALL <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
