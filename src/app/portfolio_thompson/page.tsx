import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/THOMPSON_02.png" alt="BAYPOP_02" width={769} height={52} priority />
        <Link href="/portfolio_golden_apple" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/THOMPSON_03_ARROW_1_NATURAL.png" alt="THOMPSON_03_ARROW_1_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/THOMPSON_03_ARROW_1_OVER.png" alt="THOMPSON_03_ARROW_1_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 52, height: 52 }}>
          <Image src="/images/THOMPSON_03_ARROW_2_NATURAL.png" alt="THOMPSON_03_ARROW_2_NATURAL" width={52} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/THOMPSON_03_ARROW_2_OVER.png" alt="THOMPSON_03_ARROW_2_NATURAL Hover" width={52} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_amedis" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/THOMPSON_03_ARROW_3_NATURAL.png" alt="THOMPSON_03_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/THOMPSON_03_ARROW_3_OVER.png" alt="THOMPSON_03_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/THOMPSON_03_ARROW_4.png" alt="THOMPSON_03_ARROW_4" width={84} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_04.png" alt="THOMPSON_04" width={979} height={862} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_05.png" alt="THOMPSON_05" width={979} height={132} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_06.png" alt="THOMPSON_06" width={84} height={833} priority />
        <Image src="/images/THOMPSON_07.png" alt="THOMPSON_07" width={810} height={833} priority />
        <Image src="/images/THOMPSON_08.png" alt="THOMPSON_08" width={85} height={833} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_09.png" alt="THOMPSON_09" width={84} height={833} priority />
        <Image src="/images/THOMPSON_10.png" alt="THOMPSON_10" width={810} height={833} priority />
        <Image src="/images/THOMPSON_11.png" alt="THOMPSON_11" width={85} height={833} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_12.png" alt="THOMPSON_12" width={84} height={828} priority />
        <Image src="/images/THOMPSON_13.png" alt="THOMPSON_13" width={809} height={828} priority />
        <Image src="/images/THOMPSON_14.png" alt="THOMPSON_14" width={86} height={828} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_15.png" alt="THOMPSON_15" width={84} height={850} priority />
        <Image src="/images/THOMPSON_16.png" alt="THOMPSON_16" width={810} height={850} priority />
        <Image src="/images/THOMPSON_17.png" alt="THOMPSON_17" width={85} height={850} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_18.png" alt="THOMPSON_18" width={84} height={776} priority />
        <Image src="/images/THOMPSON_19.png" alt="THOMPSON_19" width={810} height={776} priority />
        <Image src="/images/THOMPSON_20.png" alt="THOMPSON_20" width={85} height={776} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_21.png" alt="THOMPSON_21" width={84} height={876} priority />
        <Image src="/images/THOMPSON_22.png" alt="THOMPSON_22" width={809} height={876} priority />
        <Image src="/images/THOMPSON_23.png" alt="THOMPSON_23" width={86} height={876} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_24.png" alt="THOMPSON_24" width={84} height={920} priority />
        <Image src="/images/THOMPSON_25.png" alt="THOMPSON_25" width={810} height={920} priority />
        <Image src="/images/THOMPSON_26.png" alt="THOMPSON_26" width={85} height={920} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_27.png" alt="THOMPSON_27" width={84} height={2164} priority />
        <Image src="/images/THOMPSON_28.png" alt="THOMPSON_28" width={810} height={2164} priority />
        <Image src="/images/THOMPSON_29.png" alt="THOMPSON_29" width={85} height={2164} priority />
      </div>
      <div className="flex">
        <Image src="/images/THOMPSON_30.png" alt="THOMPSON_30" width={425} height={24} priority />
        <Link href="#top" className="group relative block" style={{ width: 129, height: 24 }}>
          <Image src="/images/THOMPSON_31_NATURAL.png" alt="THOMPSON_31_NATURAL" width={129} height={24} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/THOMPSON_31_OVER.png" alt="THOMPSON_31_NATURAL Hover" width={129} height={24} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/THOMPSON_32.png" alt="THOMPSON_32" width={425} height={24} priority />
      </div>
    </div>
  );
}




