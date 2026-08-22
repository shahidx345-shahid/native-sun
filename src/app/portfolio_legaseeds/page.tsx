import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/LEGASEEDS_01_HEADER.png" alt="REPTOWEL_01_HEADER" width={762} height={52} priority />
        <Link href="/portfolio_rapidrelief" className="group relative block" style={{ width: 45, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL" width={45} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_OVER.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL Hover" width={45} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 50, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL" width={50} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_OVER.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL Hover" width={50} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_casual_living" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_OVER.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/RAPID_RELIEF_02_ARROW_4_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_4_NATURAL" width={85} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_03.png" alt="legaseeds_03" width={84} height={507} priority />
        <Image src="/images/LEGASEEDS_04.png" alt="legaseeds_04" width={810} height={507} priority />
        <Image src="/images/LEGASEEDS_05.png" alt="legaseeds_05" width={85} height={507} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_06.png" alt="legaseeds_06" width={979} height={129} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_07.png" alt="legaseeds_07" width={84} height={484} priority />
        <Image src="/images/LEGASEEDS_08.png" alt="legaseeds_08" width={810} height={484} priority />
        <Image src="/images/LEGASEEDS_09.png" alt="legaseeds_09" width={85} height={484} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_10.png" alt="legaseeds_10" width={84} height={586} priority />
        <Image src="/images/LEGASEEDS_11.png" alt="legaseeds_11" width={810} height={586} priority />
        <Image src="/images/LEGASEEDS_12.png" alt="legaseeds_12" width={85} height={586} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_13.png" alt="legaseeds_13" width={84} height={620} priority />
        <Image src="/images/LEGASEEDS_14.png" alt="legaseeds_14" width={810} height={620} priority />
        <Image src="/images/LEGASEEDS_15.png" alt="legaseeds_15" width={85} height={620} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_16.png" alt="legaseeds_16" width={84} height={622} priority />
        <Image src="/images/LEGASEEDS_17.png" alt="legaseeds_17" width={810} height={622} priority />
        <Image src="/images/LEGASEEDS_18.png" alt="legaseeds_18" width={85} height={622} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_19.png" alt="legaseeds_19" width={84} height={1064} priority />
        <Image src="/images/LEGASEEDS_20.png" alt="legaseeds_20" width={810} height={1064} priority />
        <Image src="/images/LEGASEEDS_21.png" alt="legaseeds_21" width={85} height={1064} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_22.png" alt="legaseeds_22" width={84} height={1157} priority />
        <Image src="/images/LEGASEEDS_23.png" alt="legaseeds_23" width={810} height={1157} priority />
        <Image src="/images/LEGASEEDS_24.png" alt="legaseeds_24" width={85} height={1157} priority />
      </div>
      <div className="flex">
        <Image src="/images/LEGASEEDS_25.png" alt="legaseeds_25" width={85} height={1215} priority />
        <Image src="/images/LEGASEEDS_26.png" alt="legaseeds_26" width={809} height={1215} priority />
        <Image src="/images/LEGASEEDS_27.png" alt="legaseeds_27" width={85} height={1215} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_112.png" alt="CONMED_112" width={425} height={27} priority />
        <Link href="#top" className="group relative block" style={{ width: 129, height: 42 }}>
          <Image src="/images/CONMED_CONTINUED_92_NATURAL.png" alt="CONMED_113" width={129} height={42} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/CONMED_CONTINUED_92_OVER.png" alt="CONMED_113 Hover" width={129} height={42} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/CONMED_114.png" alt="CONMED_114" width={425} height={27} priority />
      </div>
    </div>
  );
}





