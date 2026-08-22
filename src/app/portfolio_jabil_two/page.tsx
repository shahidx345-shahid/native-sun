import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/JABIL_CONTINUED_01_HEADER.png" alt="REPTOWEL_01_HEADER" width={762} height={52} priority />
        <Link href="/portfolio_jabil_one" className="group relative block" style={{ width: 45, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL" width={45} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_OVER.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL Hover" width={45} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 50, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL" width={50} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_OVER.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL Hover" width={50} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_newbreed" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_OVER.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/RAPID_RELIEF_02_ARROW_4_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_4_NATURAL" width={85} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_03.png" alt="portfolio_jabil_03" width={84} height={815} priority />
        <Image src="/images/JABIL2_04.png" alt="portfolio_jabil_04" width={810} height={815} priority />
        <Image src="/images/JABIL2_05.png" alt="portfolio_jabil_05" width={85} height={815} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_06.png" alt="portfolio_jabil_06" width={979} height={143} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_07.png" alt="jabil2_07" width={84} height={5680} priority />
        <Image src="/images/JABIL2_08.png" alt="jabil2_08" width={810} height={5680} priority />
        <Image src="/images/JABIL2_09.png" alt="jabil2_09" width={84} height={5680} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL_10.png" alt="portfolio_jabil_10" width={85} height={815} priority />
        <Image src="/images/JABIL2_11.png" alt="portfolio_jabil_11" width={809} height={503} priority />
        <Image src="/images/JABIL2_12.png" alt="portfolio_jabil_12" width={85} height={503} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_13.png" alt="portfolio_jabil_13" width={85} height={496} priority />
        <Image src="/images/JABIL2_14.png" alt="portfolio_jabil_14" width={809} height={496} priority />
        <Image src="/images/JABIL2_15.png" alt="portfolio_jabil_15" width={85} height={496} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_16.png" alt="portfolio_jabil_16" width={85} height={499} priority />
        <Image src="/images/JABIL2_17.png" alt="portfolio_jabil_17" width={810} height={499} priority />
        <Image src="/images/JABIL2_18.png" alt="portfolio_jabil_18" width={85} height={499} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_19.png" alt="portfolio_jabil_19" width={84} height={500} priority />
        <Image src="/images/JABIL2_20.png" alt="portfolio_jabil_20" width={809} height={500} priority />
        <Image src="/images/JABIL2_21.png" alt="jabil_21" width={85} height={500} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_22.png" alt="jabil_22" width={85} height={499} priority />
        <Image src="/images/JABIL2_23.png" alt="jabil_23" width={809} height={499} priority />
        <Image src="/images/JABIL2_24.png" alt="portfolio_jabil_24" width={85} height={499} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_25.png" alt="jabil_25" width={85} height={498} priority />
        <Image src="/images/JABIL2_26.png" alt="jabil_26" width={809} height={498} priority />
        <Image src="/images/JABIL2_27.png" alt="portfolio_jabil_27" width={85} height={498} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_28.png" alt="portfolio_jabil_28" width={85} height={501} priority />
        <Image src="/images/JABIL2_29.png" alt="portfolio_jabil_29" width={809} height={501} priority />
        <Image src="/images/JABIL2_30.png" alt="portfolio_jabil_30" width={84} height={501} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_31.png" alt="jabil_31" width={85} height={502} priority />
        <Image src="/images/JABIL2_32.png" alt="jabil_32" width={809} height={502} priority />
        <Image src="/images/JABIL2_33.png" alt="jabil_33" width={85} height={502} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_34.png" alt="portfolio_jabil_34" width={85} height={500} priority />
        <Image src="/images/JABIL2_35.png" alt="jabil_35" width={809} height={500} priority />
        <Image src="/images/JABIL2_36.png" alt="portfolio_jabil_36" width={85} height={500} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_37.png" alt="jabil_37" width={85} height={501} priority />
        <Image src="/images/JABIL2_38.png" alt="jabil_38" width={809} height={501} priority />
        <Image src="/images/JABIL2_39.png" alt="portfolio_jabil_39" width={85} height={501} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_40.png" alt="jabil_40" width={85} height={503} priority />
        <Image src="/images/JABIL2_41.png" alt="jabil_41" width={809} height={503} priority />
        <Image src="/images/JABIL2_42.png" alt="portfolio_jabil_42" width={84} height={503} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_43.png" alt="jabil_43" width={85} height={500} priority />
        <Image src="/images/JABIL2_44.png" alt="portfolio_jabil_44" width={810} height={500} priority />
        <Image src="/images/JABIL2_45.png" alt="portfolio_jabil_45" width={84} height={500} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_46.png" alt="portfolio_jabil_46" width={85} height={502} priority />
        <Image src="/images/JABIL2_47.png" alt="portfolio_jabil_47" width={809} height={502} priority />
        <Image src="/images/JABIL2_48.png" alt="portfolio_jabil_48" width={85} height={502} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_49.png" alt="portfolio_jabil_49" width={84} height={497} priority />
        <Image src="/images/JABIL2_50.png" alt="portfolio_jabil_50" width={810} height={497} priority />
        <Image src="/images/JABIL2_51.png" alt="portfolio_jabil_51" width={85} height={497} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_52.png" alt="jabil_52" width={85} height={499} priority />
        <Image src="/images/JABIL2_53.png" alt="portfolio_jabil_53" width={810} height={499} priority />
        <Image src="/images/JABIL2_54.png" alt="portfolio_jabil_54" width={84} height={499} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_55.png" alt="portfolio_jabil_55" width={84} height={504} priority />
        <Image src="/images/JABIL2_56.png" alt="portfolio_jabil_56" width={810} height={504} priority />
        <Image src="/images/JABIL2_57.png" alt="portfolio_jabil_57" width={84} height={504} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_58.png" alt="portfolio_jabil_58" width={85} height={499} priority />
        <Image src="/images/JABIL2_59.png" alt="portfolio_jabil_59" width={810} height={499} priority />
        <Image src="/images/JABIL2_60.png" alt="portfolio_jabil_60" width={84} height={499} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_61.png" alt="portfolio_jabil_61" width={85} height={499} priority />
        <Image src="/images/JABIL2_62.png" alt="portfolio_jabil_62" width={810} height={499} priority />
        <Image src="/images/JABIL2_63.png" alt="portfolio_jabil_63" width={84} height={499} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_64.png" alt="portfolio_jabil_64" width={84} height={6007} priority />
        <Image src="/images/JABIL2_65.png" alt="portfolio_jabil_65" width={810} height={6006} priority />
        <Image src="/images/JABIL2_66.png" alt="portfolio_jabil_66" width={84} height={6006} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_67.png" alt="portfolio_jabil_67" width={84} height={7996} priority />
        <Image src="/images/JABIL2_68.png" alt="portfolio_jabil_68" width={810} height={7997} priority />
        <Image src="/images/JABIL2_69.png" alt="portfolio_jabil_69" width={84} height={7997} priority />
      </div>
      <div className="flex">
        <Image src="/images/JABIL2_70.png" alt="portfolio_jabil_70" width={85} height={1051} priority />
        <Image src="/images/JABIL2_71.png" alt="portfolio_jabil_71" width={809} height={1051} priority />
        <Image src="/images/JABIL2_72.png" alt="portfolio_jabil_72" width={85} height={1051} priority />
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





