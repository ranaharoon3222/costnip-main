import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { TbBrandSpotify } from "react-icons/tb";

const MobileTabs = () => {
  return (
    <>
    <div className="bg-white py-3 px-6  w-full mx-[auto] z-50 fixed left-0 bottom-0 md:hidden  ">
<div className=" max-w-[330px] flex justify-between ">
    
      <div>
        <AiOutlineHome className="text-2xl mx-[auto]"/>
        <h1>Home</h1>
      </div>

      <div>
        <AiOutlineSearch className="text-2xl mx-[auto]"/>
        <h1>Search</h1>
      </div>

      <div>
        <TbBrandSpotify className="text-2xl mx-[auto]"/>
        <h1>spotlight</h1>
      </div>

</div>
    </div>
    </>
  )
}

export default MobileTabs

