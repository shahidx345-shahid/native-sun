import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/CONMED_01_HEADER.png" alt="CONMED_01_HEADER" width={762} height={52} priority />
        <Link href="/portfolio_pcb" className="group relative block" style={{ width: 45, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL" width={45} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_OVER.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL Hover" width={45} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 50, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL" width={50} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_OVER.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL Hover" width={50} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_conmed_continued" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_OVER.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/RAPID_RELIEF_02_ARROW_4_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_4_NATURAL" width={85} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_03_HEADER.png" alt="CONMED_03_HEADER" width={979} height={24} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_03.png" alt="CONMED_03" width={84} height={534} priority />
        <Image src="/images/CONMED_04.png" alt="CONMED_04" width={811} height={534} priority />
        <Image src="/images/CONMED_05.png" alt="CONMED_05" width={84} height={534} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_06.png" alt="CONMED_06" width={979} height={145} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_07.png" alt="CONMED_07" width={84} height={549} priority />
        <Image src="/images/CONMED_08.png" alt="CONMED_08" width={810} height={548} priority />
        <Image src="/images/CONMED_09.png" alt="CONMED_09" width={85} height={548} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_10.png" alt="CONMED_10" width={84} height={1254} priority />
        <Image src="/images/CONMED_11.png" alt="CONMED_11" width={811} height={1254} priority />
        <Image src="/images/CONMED_12.png" alt="CONMED_12" width={84} height={1254} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_13.png" alt="CONMED_13" width={84} height={644} priority />
        <Image src="/images/CONMED_14.png" alt="CONMED_14" width={811} height={644} priority />
        <Image src="/images/CONMED_15.png" alt="CONMED_15" width={84} height={644} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_16.png" alt="CONMED_16" width={84} height={1230} priority />
        <Image src="/images/CONMED_17.png" alt="CONMED_17" width={811} height={1230} priority />
        <Image src="/images/CONMED_18.png" alt="CONMED_18" width={84} height={1230} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_19.png" alt="CONMED_19" width={84} height={1116} priority />
        <Image src="/images/CONMED_20.png" alt="CONMED_20" width={811} height={1116} priority />
        <Image src="/images/CONMED_21.png" alt="CONMED_21" width={84} height={1116} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_22.png" alt="CONMED_22" width={84} height={723} priority />
        <Image src="/images/CONMED_23.png" alt="CONMED_23" width={811} height={723} priority />
        <Image src="/images/CONMED_24.png" alt="CONMED_24" width={84} height={723} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_25.png" alt="CONMED_25" width={84} height={639} priority />
        <Image src="/images/CONMED_26.png" alt="CONMED_26" width={811} height={639} priority />
        <Image src="/images/CONMED_27.png" alt="CONMED_27" width={84} height={639} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_28.png" alt="CONMED_28" width={84} height={1110} priority />
        <Image src="/images/CONMED_29.png" alt="CONMED_29" width={811} height={1110} priority />
        <Image src="/images/CONMED_30.png" alt="CONMED_30" width={84} height={1110} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_31.png" alt="CONMED_31" width={84} height={570} priority />
        <Image src="/images/CONMED_32.png" alt="CONMED_32" width={811} height={570} priority />
        <Image src="/images/CONMED_33.png" alt="CONMED_33A" width={84} height={570} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_34.png" alt="CONMED_34" width={84} height={747} priority />
        <Image src="/images/CONMED_35.png" alt="CONMED_35" width={811} height={747} priority />
        <Image src="/images/CONMED_36.png" alt="CONMED_36" width={84} height={747} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_37.png" alt="CONMED_37" width={84} height={684} priority />
        <Image src="/images/CONMED_38.png" alt="CONMED_38" width={811} height={684} priority />
        <Image src="/images/CONMED_39.png" alt="CONMED_39" width={84} height={684} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_40.png" alt="CONMED_40" width={84} height={678} priority />
        <Image src="/images/CONMED_41.png" alt="CONMED_41" width={811} height={678} priority />
        <Image src="/images/CONMED_42.png" alt="CONMED_42" width={84} height={678} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_43.png" alt="CONMED_43" width={84} height={625} priority />
        <Image src="/images/CONMED_44.png" alt="CONMED_44" width={811} height={625} priority />
        <Image src="/images/CONMED_45.png" alt="CONMED_45" width={84} height={625} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_46.png" alt="CONMED_46" width={84} height={641} priority />
        <Image src="/images/CONMED_47.png" alt="CONMED_47" width={811} height={641} priority />
        <Image src="/images/CONMED_48.png" alt="CONMED_48" width={84} height={641} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_49.png" alt="CONMED_49" width={84} height={436} priority />
        <Image src="/images/CONMED_50.png" alt="CONMED_50" width={811} height={436} priority />
        <Image src="/images/CONMED_51.png" alt="CONMED_51" width={84} height={436} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_52.png" alt="CONMED_52" width={84} height={635} priority />
        <Image src="/images/CONMED_53.png" alt="CONMED_53" width={811} height={635} priority />
        <Image src="/images/CONMED_54.png" alt="CONMED_54" width={84} height={635} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_55.png" alt="CONMED_55" width={84} height={647} priority />
        <Image src="/images/CONMED_56.png" alt="CONMED_56" width={811} height={647} priority />
        <Image src="/images/CONMED_57.png" alt="CONMED_57" width={84} height={647} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_58.png" alt="CONMED_58" width={84} height={1113} priority />
        <Image src="/images/CONMED_59.png" alt="CONMED_59" width={811} height={1113} priority />
        <Image src="/images/CONMED_60.png" alt="CONMED_60" width={84} height={1113} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_61.png" alt="CONMED_61" width={84} height={643} priority />
        <Image src="/images/CONMED_62.png" alt="CONMED_62" width={811} height={643} priority />
        <Image src="/images/CONMED_63.png" alt="CONMED_63" width={84} height={643} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_64.png" alt="CONMED_64" width={84} height={639} priority />
        <Image src="/images/CONMED_65.png" alt="CONMED_65" width={811} height={639} priority />
        <Image src="/images/CONMED_66.png" alt="CONMED_66" width={84} height={639} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_67.png" alt="CONMED_67" width={84} height={845} priority />
        <Image src="/images/CONMED_68.png" alt="CONMED_68" width={811} height={845} priority />
        <Image src="/images/CONMED_69.png" alt="CONMED_69" width={84} height={845} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_70.png" alt="CONMED_70" width={84} height={637} priority />
        <Image src="/images/CONMED_71.png" alt="CONMED_71" width={811} height={637} priority />
        <Image src="/images/CONMED_72.png" alt="CONMED_72" width={84} height={637} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_73.png" alt="CONMED_73" width={84} height={603} priority />
        <Image src="/images/CONMED_74.png" alt="CONMED_74" width={811} height={603} priority />
        <Image src="/images/CONMED_75.png" alt="CONMED_75" width={84} height={603} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_76.png" alt="CONMED_76" width={84} height={637} priority />
        <Image src="/images/CONMED_77.png" alt="CONMED_77" width={811} height={637} priority />
        <Image src="/images/CONMED_78.png" alt="CONMED_78" width={84} height={637} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_79.png" alt="CONMED_79" width={84} height={1129} priority />
        <Image src="/images/CONMED_80.png" alt="CONMED_80" width={811} height={1129} priority />
        <Image src="/images/CONMED_81.png" alt="CONMED_81" width={84} height={1129} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_82.png" alt="CONMED_82" width={84} height={1084} priority />
        <Image src="/images/CONMED_83.png" alt="CONMED_83" width={811} height={1084} priority />
        <Image src="/images/CONMED_84.png" alt="CONMED_84" width={84} height={1084} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_85.png" alt="CONMED_85" width={84} height={682} priority />
        <Image src="/images/CONMED_86.png" alt="CONMED_86" width={811} height={682} priority />
        <Image src="/images/CONMED_87.png" alt="CONMED_87" width={84} height={682} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_88.png" alt="CONMED_88" width={84} height={642} priority />
        <Image src="/images/CONMED_89.png" alt="CONMED_89" width={811} height={642} priority />
        <Image src="/images/CONMED_90.png" alt="CONMED_90" width={84} height={642} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_91.png" alt="CONMED_91" width={84} height={266} priority />
        <Image src="/images/CONMED_92.png" alt="CONMED_92" width={811} height={266} priority />
        <Image src="/images/CONMED_93.png" alt="CONMED_93" width={84} height={266} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_94.png" alt="CONMED_94" width={84} height={1273} priority />
        <Image src="/images/CONMED_95.png" alt="CONMED_95" width={811} height={1273} priority />
        <Image src="/images/CONMED_96.png" alt="CONMED_96" width={84} height={1273} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_97.png" alt="CONMED_97" width={84} height={1275} priority />
        <Image src="/images/CONMED_98.png" alt="CONMED_98" width={811} height={1275} priority />
        <Image src="/images/CONMED_99.png" alt="CONMED_99" width={84} height={1275} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_100.png" alt="CONMED_100" width={84} height={1275} priority />
        <Image src="/images/CONMED_101.png" alt="CONMED_101" width={811} height={1275} priority />
        <Image src="/images/CONMED_102.png" alt="CONMED_102" width={84} height={1275} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_103.png" alt="CONMED_103" width={84} height={1084} priority />
        <Image src="/images/CONMED_104.png" alt="CONMED_104" width={811} height={1084} priority />
        <Image src="/images/CONMED_105.png" alt="CONMED_105" width={84} height={1084} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_106.png" alt="CONMED_106" width={84} height={1083} priority />
        <Image src="/images/CONMED_107.png" alt="CONMED_107" width={811} height={1083} priority />
        <Image src="/images/CONMED_108.png" alt="CONMED_108" width={84} height={1083} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_109.png" alt="CONMED_109" width={84} height={1074} priority />
        <Image src="/images/CONMED_110.png" alt="CONMED_110" width={811} height={1074} priority />
        <Image src="/images/CONMED_111.png" alt="CONMED_111" width={84} height={1074} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_112.png" alt="CONMED_112" width={425} height={27} priority />
        <Link href="#top" className="group relative block" style={{ width: 129, height: 27 }}>
          <Image src="/images/CONMED_113_NATURAL.png" alt="CONMED_113" width={129} height={27} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/CONMED_113_OVER.png" alt="CONMED_113 Hover" width={129} height={27} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/CONMED_114.png" alt="CONMED_114" width={425} height={27} priority />
      </div>
    </div>
  );
}





