import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/JABIL_01_HEADER.png" alt="REPTOWEL_01_HEADER" width={762} height={52} priority />
        <Link href="/portfolio_conmed_continued" className="group relative block" style={{ width: 45, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL" width={45} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_OVER.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL Hover" width={45} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 50, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL" width={50} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_OVER.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL Hover" width={50} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_jabil_two" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_OVER.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/RAPID_RELIEF_02_ARROW_4_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_4_NATURAL" width={85} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_03.png" alt="portfolio_jabil1_03" width={85} height={1310} priority />
        <Image src="/images/JABIL_04.png" alt="portfolio_jabil1_04" width={809} height={1310} priority />
        <Image src="/images/JABIL_05.png" alt="portfolio_jabil1_05" width={85} height={1310} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_06.png" alt="portfolio_jabil1_06" width={979} height={137} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_07.png" alt="portfolio_jabil1_07" width={84} height={480} priority />
        <Image src="/images/JABIL_08.png" alt="portfolio_jabil1_08" width={809} height={480} priority />
        <Image src="/images/JABIL_09.png" alt="portfolio_jabil1_09" width={85} height={480} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_10.png" alt="portfolio_jabil1_10" width={85} height={815} priority />
        <Image src="/images/JABIL_11.png" alt="portfolio_jabil1_11" width={809} height={815} priority />
        <Image src="/images/JABIL_12.png" alt="portfolio_jabil1_12" width={84} height={815} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_13.png" alt="portfolio_jabil1_13" width={84} height={1302} priority />
        <Image src="/images/JABIL_14.png" alt="portfolio_jabil1_14" width={811} height={1303} priority />
        <Image src="/images/JABIL_15.png" alt="portfolio_jabil1_15" width={84} height={1303} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_16.png" alt="portfolio_jabil1_16" width={62} height={480} priority />
        <video width={855} height={480} poster="/images/Under Pressure-Slate-01.png" preload="metadata" controls>
          <source src="/images/Under Pressure - Innovating a Connected, Minimally Invasive Device.webm" type="video/webm" />
        </video>
        <Image src="/images/JABIL_18.png" alt="portfolio_jabil1_18" width={62} height={480} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_19.png" alt="portfolio_jabil1_19" width={84} height={7673} priority />
        <Image src="/images/JABIL_20.png" alt="portfolio_jabil1_20" width={810} height={7673} priority />
        <Image src="/images/JABIL_21.png" alt="portfolio_jabil1_21" width={85} height={7673} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_22.png" alt="portfolio_jabil1_22" width={85} height={424} priority />
        <Image src="/images/JABIL_23.png" alt="portfolio_jabil1_23" width={809} height={424} priority />
        <Image src="/images/JABIL_24.png" alt="portfolio_jabil1_24" width={84} height={424} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_25.png" alt="portfolio_jabil1_25" width={85} height={422} priority />
        <Image src="/images/JABIL_26.png" alt="portfolio_jabil1_26" width={810} height={422} priority />
        <Image src="/images/JABIL_27.png" alt="portfolio_jabil1_27" width={84} height={422} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_28.png" alt="portfolio_jabil1_28" width={84} height={613} priority />
        <Image src="/images/JABIL_29.png" alt="portfolio_jabil1_29" width={811} height={613} priority />
        <Image src="/images/JABIL_30.png" alt="portfolio_jabil1_30" width={84} height={613} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_31.png" alt="portfolio_jabil1_31" width={85} height={4699} priority />
        <Image src="/images/JABIL_32.png" alt="portfolio_jabil1_32" width={809} height={4699} priority />
        <Image src="/images/JABIL_33.png" alt="portfolio_jabil1_33" width={85} height={4699} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_34.png" alt="portfolio_jabil1_34" width={85} height={7214} priority />
        <Image src="/images/JABIL_35.png" alt="portfolio_jabil1_35" width={809} height={7214} priority />
        <Image src="/images/JABIL_36.png" alt="portfolio_jabil1_36" width={85} height={7214} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_37.png" alt="portfolio_jabil1_37" width={85} height={1262} priority />
        <Image src="/images/JABIL_38.png" alt="portfolio_jabil1_38" width={809} height={1262} priority />
        <Image src="/images/JABIL_39.png" alt="portfolio_jabil1_39" width={84} height={1262} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_40.png" alt="portfolio_jabil1_40" width={85} height={625} priority />
        <Image src="/images/JABIL_41.png" alt="portfolio_jabil1_41" width={809} height={625} priority />
        <Image src="/images/JABIL_42.png" alt="portfolio_jabil1_42" width={84} height={625} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_43.png" alt="portfolio_jabil1_43" width={84} height={567} priority />
        <Image src="/images/JABIL_44.png" alt="portfolio_jabil1_44" width={811} height={567} priority />
        <Image src="/images/JABIL_45.png" alt="portfolio_jabil1_45" width={84} height={567} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_46.png" alt="portfolio_jabil1_46" width={85} height={570} priority />
        <Image src="/images/JABIL_47.png" alt="portfolio_jabil1_47" width={809} height={570} priority />
        <Image src="/images/JABIL_48.png" alt="portfolio_jabil1_48" width={84} height={570} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_49.png" alt="portfolio_jabil1_49" width={84} height={571} priority />
        <Image src="/images/JABIL_50.png" alt="portfolio_jabil1_50" width={811} height={571} priority />
        <Image src="/images/JABIL_51.png" alt="portfolio_jabil1_51" width={84} height={571} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_52.png" alt="portfolio_jabil1_52" width={84} height={573} priority />
        <Image src="/images/JABIL_53.png" alt="portfolio_jabil1_53" width={811} height={573} priority />
        <Image src="/images/JABIL_54.png" alt="portfolio_jabil1_54" width={84} height={573} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_40.png" alt="REPTOWEL_40" width={425} height={29} priority />
        <Link href="#top" className="group relative block" style={{ width: 129, height: 42 }}>
          <Image src="/images/CONMED_CONTINUED_92_NATURAL.png" alt="REPTOWEL_41" width={129} height={42} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/CONMED_CONTINUED_92_OVER.png" alt="REPTOWEL_41 Hover" width={129} height={42} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/REPTOWEL_42.png" alt="REPTOWEL_42" width={425} height={29} priority />
      </div>
    </div>
  );
}





