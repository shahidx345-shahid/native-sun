import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/BAYPOP_02.png" alt="BAYPOP_02" width={769} height={52} priority />
        <Link href="/portfolio" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/BAYPOP_03_ARROW_1_NATURAL.png" alt="BAYPOP_03_ARROW_1_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/BAYPOP_03_ARROW_1_OVER.png" alt="BAYPOP_03_ARROW_1_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 52, height: 52 }}>
          <Image src="/images/BAYPOP_03_ARROW_2_NATURAL.png" alt="BAYPOP_03_ARROW_2_NATURAL" width={52} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/BAYPOP_03_ARROW_2_OVER.png" alt="BAYPOP_03_ARROW_2_NATURAL Hover" width={52} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_pcb" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/BAYPOP_03_ARROW_3_NATURAL.png" alt="BAYPOP_03_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/BAYPOP_03_ARROW_3_OVER.png" alt="BAYPOP_03_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/BAYPOP_04.png" alt="BAYPOP_03_ARROW_4" width={84} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_05.png" alt="BAYPOP_05" width={979} height={38} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_06.png" alt="BAYPOP_06" width={84} height={974} priority />
        <Image src="/images/BAYPOP_07.png" alt="BAYPOP_07" width={811} height={974} priority />
        <Image src="/images/BAYPOP_08.png" alt="BAYPOP_08" width={84} height={974} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_09.png" alt="BAYPOP_09" width={979} height={165} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_10.png" alt="BAYPOP_10" width={84} height={500} priority />
        <Image src="/images/BAYPOP_11.png" alt="BAYPOP_11" width={811} height={500} priority />
        <Image src="/images/BAYPOP_12.png" alt="BAYPOP_12" width={84} height={500} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_13.png" alt="BAYPOP_13" width={84} height={510} priority />
        <Image src="/images/BAYPOP_14.png" alt="BAYPOP_14" width={811} height={510} priority />
        <Image src="/images/BAYPOP_15.png" alt="BAYPOP_15" width={84} height={510} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_16.png" alt="BAYPOP_16" width={84} height={510} priority />
        <Image src="/images/BAYPOP_17.png" alt="BAYPOP_17" width={811} height={510} priority />
        <Image src="/images/BAYPOP_18.png" alt="BAYPOP_18" width={84} height={510} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_19.png" alt="BAYPOP_19" width={84} height={511} priority />
        <Image src="/images/BAYPOP_20.png" alt="BAYPOP_20" width={811} height={511} priority />
        <Image src="/images/BAYPOP_21.png" alt="BAYPOP_21" width={84} height={511} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_22.png" alt="BAYPOP_22" width={84} height={508} priority />
        <Image src="/images/BAYPOP_23.png" alt="BAYPOP_23" width={811} height={508} priority />
        <Image src="/images/BAYPOP_24.png" alt="BAYPOP_24" width={84} height={508} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_25.png" alt="BAYPOP_25" width={84} height={508} priority />
        <Image src="/images/BAYPOP_26.png" alt="BAYPOP_26" width={811} height={508} priority />
        <Image src="/images/BAYPOP_27.png" alt="BAYPOP_27" width={84} height={508} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_28.png" alt="BAYPOP_28" width={84} height={511} priority />
        <Image src="/images/BAYPOP_29.png" alt="BAYPOP_29" width={811} height={511} priority />
        <Image src="/images/BAYPOP_30.png" alt="BAYPOP_30" width={84} height={511} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_31.png" alt="BAYPOP_31" width={84} height={509} priority />
        <Image src="/images/BAYPOP_32.png" alt="BAYPOP_32" width={811} height={509} priority />
        <Image src="/images/BAYPOP_33.png" alt="BAYPOP_33" width={84} height={509} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_34.png" alt="BAYPOP_34" width={84} height={507} priority />
        <Image src="/images/BAYPOP_35.png" alt="BAYPOP_35" width={811} height={507} priority />
        <Image src="/images/BAYPOP_36.png" alt="BAYPOP_36" width={84} height={507} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_37.png" alt="BAYPOP_37" width={84} height={510} priority />
        <Image src="/images/BAYPOP_38.png" alt="BAYPOP_38" width={811} height={510} priority />
        <Image src="/images/BAYPOP_39.png" alt="BAYPOP_39" width={84} height={510} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_40.png" alt="BAYPOP_40" width={84} height={639} priority />
        <Image src="/images/BAYPOP_41.png" alt="BAYPOP_41" width={811} height={639} priority />
        <Image src="/images/BAYPOP_42.png" alt="BAYPOP_42" width={84} height={639} priority />
      </div>
      <div className="flex">
        <Image src="/images/BAYPOP_43.png" alt="BAYPOP_43" width={425} height={30} priority />
        <Link href="#top" className="group relative block" style={{ width: 130, height: 28 }}>
          <Image src="/images/BAYPOP_44_NATURAL.png" alt="BAYPOP_44_NATURAL" width={130} height={28} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/BAYPOP_44_OVER.png" alt="BAYPOP_44_NATURAL Hover" width={130} height={28} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/BAYPOP_45.png" alt="BAYPOP_45" width={424} height={28} priority />
      </div>
    </div>
  );
}





