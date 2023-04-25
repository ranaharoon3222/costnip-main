import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import styles from '../../styles/styles'

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const FrequentQuestions = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      id="faq"
      className={`${styles.innerWidth} md:flex justify-between mt-10 md:mt-20 mb-20 `}
    >
      <div className="basis-2/5 text-center md:text-left">
        <h4 className="text-dark font-semibold tracking-tight text-2xl md:text-3xl lg:text-4xl leading-[30px] lg:leading-[44px]">
          Frequently Asked <br /> Questions
        </h4>
        <p className={`${styles.paragraph} mt-1 `}>
          We’re here to help you
        </p>

        <div className="mt-6 md:mt-10">
          <p className={`${styles.paragraph} mt-1 `}>
            Still can’t find what you need?{" "}
          </p>
          <button className="border-[1px] border-solid border-primary text-primary text-xs md:text-base tracking-tight font-semibold mt-2 py-2 px-3 rounded-md mb-3 md:mb-0">
            Learn More
          </button>
        </div>
      </div>

      <div className="basis-3/5">
        <Accordion open={open === 1} className="accordion-border">
          <AccordionHeader
            className={styles.accordionHeader}
            onClick={() => handleOpen(1)}
          >
            What are the advantages of horn antennas for WISPs?
          </AccordionHeader>
          {open === 1 && (
            <AccordionBody className={styles.accordionText}>
              Horn antennas offer several advantages for Wireless Internet
              Service Providers (WISPs) when used in their networks. Some of the
              key benefits include: <br /> <br /> Wide bandwidth: Horn antennas
              can operate over a wide range of frequencies, making them suitable
              for various applications and allowing WISPs to offer multiple
              services within the same infrastructure. <br /> <br /> High gain
              and directivity: Horn antennas have high gain and directivity,
              which can improve signal strength, maximize coverage, and help
              reduce interference from other signals. This is particularly
              useful in areas with limited infrastructure or where multiple
              wireless links need to coexist.
              <br /> <br /> Low VSWR (Voltage Standing Wave Ratio): Horn
              antennas typically have a low VSWR, which indicates efficient
              power transfer between the antenna and the transmission line. This
              results in reduced signal reflection and increased overall system
              performance. <br /> <br /> Simple construction and robustness:
              Horn antennas are mechanically simple and can be made from a
              variety of materials, making them relatively easy to construct and
              maintain. Their robustness also helps withstand harsh
              environmental conditions, which can be especially beneficial in
              remote or rural areas.
              <br /> <br /> Low sidelobe levels: Horn antennas generally have
              low sidelobe levels, which can help minimize interference with
              other wireless networks and reduce the potential for eavesdropping
              or signal interception.
              <br /> <br /> Improved isolation: The physical structure of horn
              antennas can provide better isolation between transmitting and
              receiving antennas, reducing the likelihood of self-interference
              and improving overall network performance.
              <br /> <br /> Easy integration: Horn antennas can be easily
              integrated with various wireless technologies, including microwave
              links, point-to-point (PtP), and point-to-multipoint (PtMP)
              communication systems.
              <br /> <br /> Scalability: Horn antennas can be easily scaled up
              or down in size and frequency range, making them suitable for a
              wide variety of applications and allowing WISPs to adapt their
              networks to changing demands and
            </AccordionBody>
          )}
        </Accordion>
        <Accordion open={open === 2} className="accordion-border">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={styles.accordionHeader}
          >
            What is the smallest beamwidth of a 5 GHz horn antenna?
          </AccordionHeader>
          {open === 2 && (
            <AccordionBody className={styles.accordionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              magnam molestias amet ipsam alias quo adipisci mollitia
              reprehenderit labore sapiente. Iste rem architecto voluptatem
              necessitatibus nam natus temporibus, voluptatum modi!
            </AccordionBody>
          )}
        </Accordion>
        <Accordion open={open === 3} className="accordion-border">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={styles.accordionHeader}
          >
            What is receive sensitivity in a radio antenna system?
          </AccordionHeader>
          {open === 3 && (
            <AccordionBody className={styles.accordionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              magnam molestias amet ipsam alias quo adipisci mollitia
              reprehenderit labore sapiente. Iste rem architecto voluptatem
              necessitatibus nam natus temporibus, voluptatum modi!
            </AccordionBody>
          )}
        </Accordion>

        <Accordion open={open === 4} className="accordion-border">
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className={styles.accordionHeader}
          >
            What factors impact receive sensitivity in a radio antenna system?
          </AccordionHeader>
          {open === 4 && (
            <AccordionBody className={styles.accordionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              magnam molestias amet ipsam alias quo adipisci mollitia
              reprehenderit labore sapiente. Iste rem architecto voluptatem
              necessitatibus nam natus temporibus, voluptatum modi!
            </AccordionBody>
          )}
        </Accordion>

        <Accordion open={open === 5} className="accordion-border">
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className={styles.accordionHeader}
          >
            How does channel width affect receive sensitivity?
          </AccordionHeader>
          {open === 5 && (
            <AccordionBody className={styles.accordionText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              magnam molestias amet ipsam alias quo adipisci mollitia
              reprehenderit labore sapiente. Iste rem architecto voluptatem
              necessitatibus nam natus temporibus, voluptatum modi!
            </AccordionBody>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentQuestions;
