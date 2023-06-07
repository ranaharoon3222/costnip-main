import React from "react";

const Email = () => {
  return (
    <>
      <div className="bg-blue-950 w-full max-w-screen-sm p-8 mx-[auto] rounded-2xl my-12">
        <h1 className="text-white font-bold text-xl py-6 text-center">
          Keep Up With Costnip News and Events
        </h1>
        <div className="text-center py-4">
          <input
            className="px-2 py-1 rounded-lg mr-3"
            type="email"
            placeholder="Email Address"
          />
          <button className="bg-transparent text-white px-3 py-1 border-white border border-solid rounded-lg ">
            
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Email;
