import React from "react";
import styles from "@/styles/styles";
import Chat from "../Chat";
const Chatbot = () => {
  return (
    <div className={`${styles.padding} chatbot-bg py-20 md:py-28`}>
      <div className="md:flex text-white md:w-[70%] m-auto gap-40 items-center">
        <div className="basis-[30%]">
          <h4 className={`${styles.heading} text-white`}>
            Health Chatbot <br /> Powered with AI
          </h4>
          <div className="hidden md:block">
            <p className="text-[#DCDCDC] font-medium leading-6 text-base">
              Welcome to Costnip, your <br /> one-stop information hub
            </p>
            <span className="text-xs leading-5 inline-block mt-5">
              To begin, you could ask Cognify for a summary of a specific
              document, or to retrieve that document for you
            </span>{" "}
            <br />
            <span className="text-xs leading-5 inline-block mt-5">
              You can also ask for insight about a retrieval, for example “How
              can I use this?”
            </span>{" "}
            <br />
            <span className="text-xs leading-5 inline-block mt-5">
              You can even say “A document says ______ , can you find the
              document this came from?
            </span>{" "}
            <br />
            <span className="text-xs leading-5 inline-block mt-5">
              You also could ask Costnip to find external information for you
            </span>{" "}
          </div>
        </div>

        <div className="basis-[70%]">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
