import React from "react";
import styles from "@/styles/styles";
import Sidebar from "./Sidebar";
import Results from "./Results";
import AverageCost from "./AverageCost";
import Sponsored from "./Sponsored";
import Partners from "./Partners";
import RelatedTags from "./RelatedTags";

const Index = () => {
  return (
    <div
      className={`${styles.width} ${styles.padding} flex flex-col-reverse md:flex-row justify-between gap-8 font-['Be_Vietnam_Pro'] mt-12 md:mt-24`}
    >
      <div className="basis-1/5">
        <Sidebar />
      </div>

      <div className="basis-4/5 min-w-0 min-h-0">
        <div>
          <Results />
        </div>
        <AverageCost />
        <RelatedTags />
        <Sponsored />
        <Partners />
      </div>
    </div>
  );
};

export default Index;
