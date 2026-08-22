import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/AMEDIS_02.png" alt="BAYPOP_02" width={769} height={52} priority />
        <Link href="/portfolio_thompson" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/AMEDIS_03_ARROW_1_NATURAL.png" alt="AMEDIS_03_ARROW_1_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/AMEDIS_03_ARROW_1_OVER.png" alt="AMEDIS_03_ARROW_1_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 52, height: 52 }}>
          <Image src="/images/AMEDIS_03_ARROW_2_NATURAL.png" alt="AMEDIS_03_ARROW_2_NATURAL" width={52} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/AMEDIS_03_ARROW_2_OVER.png" alt="AMEDIS_03_ARROW_2_NATURAL Hover" width={52} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_alkemite" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/AMEDIS_03_ARROW_3_NATURAL.png" alt="AMEDIS_03_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/AMEDIS_03_ARROW_3_OVER.png" alt="AMEDIS_03_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/AMEDIS_03_ARROW_4.png" alt="AMEDIS_03_ARROW_4" width={84} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/AMEDIS_04.png" alt="AMEDIS_04" width={84} height={495} priority />
        <Image src="/images/AMEDIS_05.png" alt="AMEDIS_05" width={810} height={495} priority />
        <Image src="/images/AMEDIS_06.png" alt="AMEDIS_06" width={85} height={495} priority />
      </div>
      <div className="flex">
        <Image src="/images/AMEDIS_07.png" alt="AMEDIS_07" width={979} height={105} priority />
      </div>
      <div className="flex">
        <Image src="/images/AMEDIS_08.png" alt="AMEDIS_08" width={84} height={483} priority />
        <Image src="/images/AMEDIS_09.png" alt="AMEDIS_09" width={810} height={483} priority />
        <Image src="/images/AMEDIS_10.png" alt="AMEDIS_10" width={85} height={483} priority />
      </div>
      <div className="flex">
        <Image src="/images/AMEDIS_11.png" alt="AMEDIS_11" width={84} height={484} priority />
        <Image src="/images/AMEDIS_12.png" alt="AMEDIS_12" width={810} height={484} priority />
        <Image src="/images/AMEDIS_13.png" alt="AMEDIS_13" width={85} height={484} priority />
      </div>
      <div className="flex">
        <Image src="/images/AMEDIS_14.png" alt="AMEDIS_14" width={84} height={640} priority />
        <Image src="/images/AMEDIS_15.png" alt="AMEDIS_15" width={810} height={640} priority />
        <Image src="/images/AMEDIS_16.png" alt="AMEDIS_16" width={85} height={640} priority />
      </div>
      <div className="flex">
        <Image src="/images/AMEDIS_17.png" alt="AMEDIS_17" width={426} height={30} priority />
        <Link href="#top" className="group relative block" style={{ width: 128, height: 30 }}>
          <Image src="/images/AMEDIS_18_NATURAL.png" alt="AMEDIS_18_NATURAL" width={128} height={30} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/AMEDIS_18_OVER.png" alt="AMEDIS_18_NATURAL Hover" width={128} height={30} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/AMEDIS_19.png" alt="AMEDIS_19" width={425} height={30} priority />
      </div>
    </div>
  );
}




