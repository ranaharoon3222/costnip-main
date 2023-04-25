import React from "react";
import styles from "../../styles/styles";
import Image from "next/image";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon6.png";
import icon3 from "../../assets/icon5.png";
import icon4 from "../../assets/icon2.png";

const Properties = () => {
  const properties = [
    {
      id: 1,
      img: icon1,
      text: "Wide frequency range 4.8 - 7.2 GHz",
    },
    {
      id: 2,
      img: icon2,
      text: "Industry leading VSWR efficiency",
    },
    {
      id: 3,
      img: icon3,
      text: "Fast and easy installation",
    },
    {
      id: 4,
      img: icon4,
      text: "High gain",
    },
  ];
  const description = [
    {
      id: 1,
      text: "A 30° symmetrical horn antenna offers distinct advantages compared to 60° and 90° asymmetrical horn antennas, particularly when dividing a 360° coverage area from the top of a WISP tower to optimize unlicensed frequency reuse",
    },
    {
      id: 2,
      heading: "Focused Coverage",
      text: "A 30° symmetrical horn antenna provides a narrower and more focused coverage area than 60° and 90° asymmetrical horn antennas. This helps to minimize interference between adjacent sectors and allows for better control over signal distribution",
    },
    {
      id: 3,
      heading: "Spatial Division",
      text: "By using 30° horn antennas, you can divide a 360° coverage area into 12 equally sized sectors, maximizing spatial division and optimizing frequency reuse. In contrast, 60° and 90° antennas would require fewer sectors, leading to larger coverage areas and potentially more overlapping signals, which can cause interference and degrade network performance.",
    },
    {
      id: 4,
      heading: "Better Co-Location",
      text: "The narrower beamwidth and improved signal isolation of 30° horn antennas make them more suitable for co-location on the same tower, allowing you to efficiently use tower space and infrastructure.",
    },
    {
      id: 5,
      heading: "        Network Scalability",
      text: " With 30° symmetrical horn antennas, you can scale your network more effectively, as they provide better frequency reuse and allow for the addition of more subscribers within each sector without causing significant interference.",
    },
    {
      id: 6,
      heading: "Better Co-Location",
      text: "The narrower beamwidth and improved signal isolation of 30° horn antennas make them more suitable for co-location on the same tower, allowing you to efficiently use tower space and infrastructure.",
    },
    {
      id: 7,
      heading: "IsoHorns Special Offer",
      text: "IsoHorns offers a 12-pack of 30° horn antennas at a 25% discount, making it more affordable for WISP operators to maximize spatial division and achieve optimal wireless network performance. This cost-effective solution can improve overall network efficiency and customer satisfaction.",
    },
    {
      id: 8,
      text: " A 30° symmetrical horn antenna is advantageous when dividing a 360° coverage area from the top of a WISP tower, as it provides a more focused coverage area and maximizes spatial division to optimize unlicensed frequency reuse. Additionally, the special offer from IsoHorns makes it an affordable option for WISP operators seeking to improve network performance and scalability.",
    },
  ];

  const specifications = [
    {
      id: 1,
      name: "Frequency Range (GHz)",
      weight: "4.8 - 7.2",
    },
    {
      id: 2,
      name: "Gain (dBi)",
      weight: "18",
    },
    {
      id: 3,
      name: "Azimuth Beam Width -6dB",
      weight: "H30°, V30°",
    },
    {
      id: 4,
      name: "Elevation Beam Width -6dB",
      weight: "H30°, V30°",
    },
    {
      id: 5,
      name: "Front to Back Ratio(dB)",
      weight: "37",
    },
    {
      id: 6,
      name: "VSWR",
      weight: "≤1.8",
    },
    {
      id: 7,
      name: "Polarization",
      weight: "Dual-Linear",
    },
    {
      id: 8,
      name: "Antenna Connection",
      weight: "Proprietary or (2) female RP-SMA",
    },
    {
      id: 9,
      name: "Net Weight",
      weight: "3 kg / 6.6 lbs",
    },
    {
      id: 10,
      name: "Material",
      weight: "UV stabilized PC, aluminum alloy",
    },
    {
      id: 11,
      name: "Wind Survivability",
      weight: "200 km/h (124 mph)",
    },
    {
      id: 12,
      name: "Wind Loading",
      weight: "200 km/h",
    },
    {
      id: 13,
      name: "Mounting",
      weight:
        "Mechanical adjustment: ±25° elevation Pole compatibility: 40 to 60 mm",
    },
    {
      id: 14,
      name: "Weatherproofing",
      weight: "IP55",
    },
  ];
  return (
    <div className={`${styles.innerWidth}`}>
      <h4 className={`${styles.heading} mt-6 mb-3 md:w-2/4`}>
        30° Symmetrical Horn Antennas vs Asymmetrical Horn Antennas
      </h4>
      <div className="md:flex">
        <div className="basis-9/12 mr-4">
          <span className="text-dark text-sm lg:text-base leading-6 tracking-tight font-medium">
            Industry leading PtMP horn antenna:
          </span>

          <div className="md:flex mt-2 mb-8 gap-10">
            {properties.map((property) => (
              <div key={property.id} className="flex items-center w-full gap-2">
                <Image
                  src={property.img}
                  alt=""
                  className="w-[35px] h-[35px]"
                />
                <p className={styles.paragraph}>{property.text}</p>
              </div>
            ))}
          </div>

          <div>
            {description.map((desrp) => (
              <div key={desrp.id} className="text-base">
                <h6 className="font-semibold text-dark">
                  {desrp.heading ? desrp.heading : ""}
                </h6>
                <p className={`${styles.paragraph} mb-6`}>{desrp.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="basis-3/12 border-[1px] border-solid border-[#D1D5DB] p-4">
          <div className="text-center md:text-left">
            <h5 className="text-dark text:xl lg:text-2xl font-semibold mb-4">
              Specifications
            </h5>
            {specifications.map((specification) => (
              <div key={specification.id} className="mb-3 text-sm lg:text-base">
                <span className="text-[#6B7280]">{specification.name}</span>
                <h6 className="font-semibold text-dark">
                  {specification.weight}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
