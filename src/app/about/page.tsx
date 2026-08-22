import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] page-white-fix">
      <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      <Image src="/images/ABOUT_US_01.png" alt="About Us Part 1" width={979} height={211} priority />
      <Image src="/images/ABOUT_US_02.png" alt="About Us Part 2" width={979} height={190} priority />
      <Image src="/images/ABOUT_US_03.png" alt="About Us Part 3" width={979} height={233} priority />
      </div>
  );
}


