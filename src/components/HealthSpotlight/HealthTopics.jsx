import React from "react";
import Featured from "./Filter/Featured";
import FilterType from "./Filter/FilterType";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import styles from "@/styles/styles";

const HealthTopics = () => {
  return (
    <>
      <div className="hidden md:block w-4/5 m-auto mt-5 mb-20 health-topics">
        <FilterType type="Health Topics" />
        <div className="relative">
          <Featured />

          <div className="hidden md:block absolute top-[52%] right-[-9%]">
            <Link href="/" className={styles.viewLink}>
              VIEW ALL <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthTopics;
