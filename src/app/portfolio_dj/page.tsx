import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/DJ_02.png" alt="BAYPOP_02" width={769} height={52} priority />
        <Link href="/portfolio_small_world" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/DJ_03_ARROW_1_NATURAL.png" alt="DJ_03_ARROW_1_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/DJ_03_ARROW_1_OVER.png" alt="DJ_03_ARROW_1_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 52, height: 52 }}>
          <Image src="/images/DJ_03_ARROW_2_NATURAL.png" alt="DJ_03_ARROW_2_NATURAL" width={52} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/DJ_03_ARROW_2_OVER.png" alt="DJ_03_ARROW_2_NATURAL Hover" width={52} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_illustrations" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/DJ_03_ARROW_3_NATURAL.png" alt="DJ_03_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/DJ_03_ARROW_3_OVER.png" alt="DJ_03_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/DJ_03_ARROW_4.png" alt="DJ_03_ARROW_4" width={84} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/DJ_04.png" alt="DJ_04" width={84} height={505} priority />
        <Image src="/images/DJ_05.png" alt="DJ_05" width={810} height={505} priority />
        <Image src="/images/DJ_06.png" alt="DJ_06" width={85} height={505} priority />
      </div>
      <div className="flex">
        <Image src="/images/DJ_07.png" alt="DJ_07" width={979} height={107} priority />
      </div>
      <div className="flex">
        <Image src="/images/DJ_08.png" alt="DJ_08" width={84} height={581} priority />
        <Image src="/images/DJ_09.png" alt="DJ_09" width={810} height={581} priority />
        <Image src="/images/DJ_10.png" alt="DJ_10" width={85} height={581} priority />
      </div>
      <div className="flex">
        <Image src="/images/DJ_11.png" alt="DJ_11" width={84} height={646} priority />
        <Image src="/images/DJ_12.png" alt="DJ_12" width={810} height={646} priority />
        <Image src="/images/DJ_13.png" alt="DJ_13" width={85} height={646} priority />
      </div>
      <div className="flex">
        <Image src="/images/DJ_14.png" alt="DJ_14" width={84} height={584} priority />
        <Image src="/images/DJ_15.png" alt="DJ_15" width={810} height={584} priority />
        <Image src="/images/DJ_16.png" alt="DJ_16" width={85} height={584} priority />
      </div>
      <div className="flex">
        <Image src="/images/DJ_17.png" alt="DJ_17" width={426} height={30} priority />
        <Link href="#top" className="group relative block" style={{ width: 128, height: 30 }}>
          <Image src="/images/DJ_18_NATURAL.png" alt="DJ_18_NATURAL" width={128} height={30} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/DJ_18_OVER.png" alt="DJ_18_NATURAL Hover" width={128} height={30} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/DJ_19.png" alt="DJ_19" width={425} height={30} priority />
      </div>
    </div>
  );
}




