import React from "react";

const Contact = () => {
  return (
    <>
      {/* ////////////head////////////// */}
      <div className="grid grid-cols-1 py-12 md:grid-cols-2 countain">
        <div className="text-clr m-[auto]">
          <h1 className="font-bold text-2xl w-full max-w-[200px] pb-4">
            Drop Us A Line We Love Helping
          </h1>
          <h3 className="w-full max-w-[500px]">
            {" "}
            If you have a question about Costnip, chances are you can find the
            answer in our <span className="text-blue-500 underline">
              FAQs
            </span>{" "}
            section
          </h3>
        </div>
        <div>
          <img className="w-[350px]" src="contact.png" alt="image" />
        </div>
      </div>
      {/* ////////////head////////////// */}
      {/* ////////////form////////////// */}
      <>
        {/* ====== Contact Section Start */}
        <section className="relative z-10 overflow-hidden countain bg-white py-20 lg:py-[120px]">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 lg:justify-center">
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
                  <form>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                      />
                    </div>
                    <div className="mb-6">
                      <select className="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none">
                        <option>General Question</option>
                        <option>Partnerships</option>
                        <option>Press</option>
                        <option>Blog Outreach</option>
                        <option>Report Bug</option>
                        <option>Report Non-Compliant Facilities</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows={6}
                        placeholder="Your Message"
                        className="text-body-color border-[f0f0f0] focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full p-3 text-white transition border rounded bg-primary border-primary hover:bg-opacity-90"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Contact Section End */}
      </>

      {/* ////////////form////////////// */}
    </>
  );
};

export default Contact;
