const About = () => {
  return (
    <>
      <div className="bg-blue-950 grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg mx-[auto] text-white rounded-2xl py-12 mb-12 shadow-xl">

        <div>
          <img className="w-[200px] mx-[auto]" src="faq.png" alt="faq-image" />
        </div>


        <div className="p-8">
            <h1 className="font-bold text-3xl">Empowering Informed Decisions</h1>
            <h4 className="text-right pt-12 text-gray-300">Join the #priceparency movement</h4>
        </div>
      </div>
      {/* //////////////////////BODY//////////////////// */}


      <h1 className="text-3xl text-blue-950 text-center font-bold ">Hub of Value Based Information</h1>
      <h4 className="w-full max-w-4xl mx-[auto] text-sm text-blue-950 my-6 px-4">Costnip was created to help take the guesswork out of healthcare spending by giving people a way to discover lower costs options for medical, dental and vision care within their area.</h4>


      {/* //////////////////////BODY//////////////////// */}

      {/* /////CARD///////////////////////////////////////// */}

<div className="w-full max-w-screen-xl mx-[auto] grid grid-cols-1 md:grid-cols-4  mb-8">

    <div className="text-center bg-[#F8F8F8] p-6 rounded-3xl shadow-lg">
        <img className="mx-[auto] w-[60px]" src="eye.png" alt="aye" />
        <h2 className="font-semibold text-blue-950 text-xl pb-2">Vision</h2>
        <p className="text-sm">We are 100% committed to making healthcare more accessible to all, regardless of status.</p>
    </div>
    
</div>

      {/* /////CARD///////////////////////////////////////// */}

      {/* ////////////email/////////////////////////////// */}

      <div className="bg-blue-950 w-full max-w-screen-sm p-8 mx-[auto] rounded-2xl my-12">

        <h1 className="text-white font-bold text-xl py-6 text-center">Keep Up With Costnip News and Events</h1>
<div className="text-center py-4">

        <input className="px-2 py-1 rounded-lg mr-3" type="email" placeholder="Email Address" />
        <button className="bg-transparent text-white px-3 py-1 border-white border border-solid rounded-lg "> Subscribe</button>
</div>
      </div>
      {/* ////////////email/////////////////////////////// */}
    </>
  );
};

export default About;
