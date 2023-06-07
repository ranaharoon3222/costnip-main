import Email from "@/components/email";

const Patnership = () => {

  const data = [
    {
      name : 'Advocate'
    },
    {
      name : 'Advocate'
    },
    {
      name : 'Advocate'
    }
  ]


  return (
    <>
      <div>
        <img className="w-[300px] mx-[auto]" src="contact.png" alt="image" />
      </div>

      <h1 className="text-purple-900 text-center font-bold text-3xl py-12">
        Get Involved
      </h1>

      <p className="text-sm w-full max-w-screen-xl mx-[auto] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
        fugiat expedita porro eius laudantium sunt iure, amet praesentium illum.
        Velit mollitia similique cum. Maiores assumenda libero eos, numquam
        saepe dolore eaque unde?
      </p>

      {/* //////////card//////////////////////////// */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-screen-xl mx-[auto] my-16">
{
  data.map((item, ind)=>{
    return(

        <div key={ind} className="text-center">
          <div className="max-w-[150px] mx-[auto] shadow-lg rounded-lg">
            <img src="webProgrammer.jpg" alt="" />
            <h3 className="text-purple-950  text-center py-4 font-semibold">{item.name}</h3>
          </div>
        </div>

    )
  })
}
        
      </div>


      {/* //////////card//////////////////////////// */}

      <Email />
    </>
  );
};

export default Patnership;
