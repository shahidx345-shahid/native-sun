import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/CONMED_CONTINUED_01_HEADER.png" alt="CONMED_01_HEADER" width={762} height={52} priority />
        <Link href="/portfolio_conmed" className="group relative block" style={{ width: 45, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL" width={45} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_OVER.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL Hover" width={45} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 50, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL" width={50} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_OVER.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL Hover" width={50} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_jabil_one" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_OVER.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/RAPID_RELIEF_02_ARROW_4_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_4_NATURAL" width={85} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_03_HEADER.png" alt="CONMED_03_HEADER" width={979} height={24} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_03.png" alt="CONMED_CONTINUED_03" width={84} height={628} priority />
        <Image src="/images/CONMED_CONTINUED_04.png" alt="CONMED_CONTINUED_04" width={811} height={628} priority />
        <Image src="/images/CONMED_CONTINUED_05.png" alt="CONMED_CONTINUED_05" width={84} height={628} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_06.png" alt="CONMED_CONTINUED_06" width={979} height={145} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_07.png" alt="CONMED_CONTINUED_07" width={84} height={1320} priority />
        <Image src="/images/CONMED_CONTINUED_08.png" alt="CONMED_CONTINUED_08" width={811} height={1320} priority />
        <Image src="/images/CONMED_CONTINUED_09.png" alt="CONMED_CONTINUED_09" width={84} height={1320} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_10.png" alt="CONMED_CONTINUED_10" width={84} height={4670} priority />
        <Image src="/images/CONMED_CONTINUED_11.png" alt="CONMED_CONTINUED_11" width={811} height={4670} priority />
        <Image src="/images/CONMED_CONTINUED_12.png" alt="CONMED_CONTINUED_12" width={84} height={4670} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_13.png" alt="CONMED_CONTINUED_13" width={84} height={4789} priority />
        <Image src="/images/CONMED_CONTINUED_14.png" alt="CONMED_CONTINUED_14" width={811} height={4789} priority />
        <Image src="/images/CONMED_CONTINUED_15.png" alt="CONMED_CONTINUED_15" width={84} height={4789} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_16.png" alt="CONMED_CONTINUED_16" width={84} height={639} priority />
        <Image src="/images/CONMED_CONTINUED_17.png" alt="CONMED_CONTINUED_17" width={811} height={639} priority />
        <Image src="/images/CONMED_CONTINUED_18.png" alt="CONMED_CONTINUED_18" width={84} height={639} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_19.png" alt="CONMED_CONTINUED_19" width={84} height={638} priority />
        <Image src="/images/CONMED_CONTINUED_20.png" alt="CONMED_CONTINUED_20" width={811} height={638} priority />
        <Image src="/images/CONMED_CONTINUED_21.png" alt="CONMED_CONTINUED_21" width={84} height={638} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_22.png" alt="CONMED_CONTINUED_22" width={84} height={641} priority />
        <Image src="/images/CONMED_CONTINUED_23.png" alt="CONMED_CONTINUED_23" width={811} height={641} priority />
        <Image src="/images/CONMED_CONTINUED_24.png" alt="CONMED_CONTINUED_24" width={84} height={641} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_25.png" alt="CONMED_CONTINUED_25" width={84} height={639} priority />
        <Image src="/images/CONMED_CONTINUED_26.png" alt="CONMED_CONTINUED_26" width={811} height={639} priority />
        <Image src="/images/CONMED_CONTINUED_27.png" alt="CONMED_CONTINUED_27" width={84} height={639} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_28.png" alt="CONMED_CONTINUED_28" width={84} height={642} priority />
        <Image src="/images/CONMED_CONTINUED_29.png" alt="CONMED_CONTINUED_29" width={811} height={642} priority />
        <Image src="/images/CONMED_CONTINUED_30.png" alt="CONMED_CONTINUED_30" width={84} height={642} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_31.png" alt="CONMED_CONTINUED_31" width={84} height={640} priority />
        <Image src="/images/CONMED_CONTINUED_32.png" alt="CONMED_CONTINUED_32" width={811} height={640} priority />
        <Image src="/images/CONMED_CONTINUED_33.png" alt="CONMED_CONTINUED_33" width={84} height={640} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_34.png" alt="CONMED_CONTINUED_34" width={84} height={640} priority />
        <Image src="/images/CONMED_CONTINUED_35.png" alt="CONMED_CONTINUED_35" width={811} height={640} priority />
        <Image src="/images/CONMED_CONTINUED_36.png" alt="CONMED_CONTINUED_36" width={84} height={640} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_37.png" alt="CONMED_CONTINUED_37" width={84} height={641} priority />
        <Image src="/images/CONMED_CONTINUED_38.png" alt="CONMED_CONTINUED_38" width={811} height={641} priority />
        <Image src="/images/CONMED_CONTINUED_39.png" alt="CONMED_CONTINUED_39" width={84} height={641} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_40.png" alt="CONMED_CONTINUED_40" width={84} height={488} priority />
        <Image src="/images/CONMED_CONTINUED_41.png" alt="CONMED_CONTINUED_41" width={811} height={488} priority />
        <Image src="/images/CONMED_CONTINUED_42.png" alt="CONMED_CONTINUED_42" width={84} height={488} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_43.png" alt="CONMED_CONTINUED_43" width={84} height={1082} priority />
        <Image src="/images/CONMED_CONTINUED_44.png" alt="CONMED_CONTINUED_44" width={811} height={1082} priority />
        <Image src="/images/CONMED_CONTINUED_45.png" alt="CONMED_CONTINUED_45" width={84} height={1082} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_46.png" alt="CONMED_CONTINUED_46" width={84} height={641} priority />
        <Image src="/images/CONMED_CONTINUED_47.png" alt="CONMED_CONTINUED_47" width={811} height={641} priority />
        <Image src="/images/CONMED_CONTINUED_48.png" alt="CONMED_CONTINUED_48" width={84} height={641} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_49.png" alt="CONMED_CONTINUED_49" width={84} height={813} priority />
        <Image src="/images/CONMED_CONTINUED_50.png" alt="CONMED_CONTINUED_50" width={811} height={813} priority />
        <Image src="/images/CONMED_CONTINUED_51.png" alt="CONMED_CONTINUED_51" width={84} height={813} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_52.png" alt="CONMED_CONTINUED_52" width={84} height={638} priority />
        <Image src="/images/CONMED_CONTINUED_53.png" alt="CONMED_CONTINUED_53" width={811} height={638} priority />
        <Image src="/images/CONMED_CONTINUED_54.png" alt="CONMED_CONTINUED_54" width={84} height={638} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_55.png" alt="CONMED_CONTINUED_55" width={84} height={640} priority />
        <Image src="/images/CONMED_CONTINUED_56.png" alt="CONMED_CONTINUED_56" width={811} height={640} priority />
        <Image src="/images/CONMED_CONTINUED_57.png" alt="CONMED_CONTINUED_57" width={84} height={640} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_58.png" alt="CONMED_CONTINUED_58" width={84} height={644} priority />
        <Image src="/images/CONMED_CONTINUED_59.png" alt="CONMED_CONTINUED_59" width={811} height={644} priority />
        <Image src="/images/CONMED_CONTINUED_60.png" alt="CONMED_CONTINUED_60" width={84} height={644} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_61.png" alt="CONMED_CONTINUED_61" width={84} height={640} priority />
        <Image src="/images/CONMED_CONTINUED_62.png" alt="CONMED_CONTINUED_62" width={811} height={640} priority />
        <Image src="/images/CONMED_CONTINUED_63.png" alt="CONMED_CONTINUED_63" width={84} height={640} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_64.png" alt="CONMED_CONTINUED_64" width={84} height={638} priority />
        <Image src="/images/CONMED_CONTINUED_65.png" alt="CONMED_CONTINUED_65" width={811} height={638} priority />
        <Image src="/images/CONMED_CONTINUED_66.png" alt="CONMED_CONTINUED_66" width={84} height={638} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_67.png" alt="CONMED_CONTINUED_67" width={84} height={1116} priority />
        <Image src="/images/CONMED_CONTINUED_68.png" alt="CONMED_CONTINUED_68" width={811} height={1116} priority />
        <Image src="/images/CONMED_CONTINUED_69.png" alt="CONMED_CONTINUED_69" width={84} height={1116} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_70.png" alt="CONMED_CONTINUED_70" width={84} height={1115} priority />
        <Image src="/images/CONMED_CONTINUED_71.png" alt="CONMED_CONTINUED_71" width={811} height={1115} priority />
        <Image src="/images/CONMED_CONTINUED_72.png" alt="CONMED_CONTINUED_72" width={84} height={1115} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_73.png" alt="CONMED_CONTINUED_73" width={84} height={1121} priority />
        <Image src="/images/CONMED_CONTINUED_74.png" alt="CONMED_CONTINUED_74" width={811} height={1121} priority />
        <Image src="/images/CONMED_CONTINUED_75.png" alt="CONMED_CONTINUED_75" width={84} height={1121} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_76.png" alt="CONMED_CONTINUED_76" width={84} height={854} priority />
        <Image src="/images/CONMED_CONTINUED_77.png" alt="CONMED_CONTINUED_77" width={811} height={854} priority />
        <Image src="/images/CONMED_CONTINUED_78.png" alt="CONMED_CONTINUED_78" width={84} height={854} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_79.png" alt="CONMED_CONTINUED_79" width={84} height={1908} priority />
        <Image src="/images/CONMED_CONTINUED_80.png" alt="CONMED_CONTINUED_80" width={811} height={1908} priority />
        <Image src="/images/CONMED_CONTINUED_81.png" alt="CONMED_CONTINUED_81" width={84} height={1908} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_82.png" alt="CONMED_CONTINUED_82" width={84} height={936} priority />
        <Image src="/images/CONMED_CONTINUED_83.png" alt="CONMED_CONTINUED_83" width={811} height={936} priority />
        <Image src="/images/CONMED_CONTINUED_84.png" alt="CONMED_CONTINUED_84" width={84} height={936} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_85.png" alt="CONMED_CONTINUED_85" width={84} height={1661} priority />
        <Image src="/images/CONMED_CONTINUED_86.png" alt="CONMED_CONTINUED_86" width={811} height={1661} priority />
        <Image src="/images/CONMED_CONTINUED_87.png" alt="CONMED_CONTINUED_87" width={84} height={1661} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_88.png" alt="CONMED_CONTINUED_88" width={84} height={1473} priority />
        <Image src="/images/CONMED_CONTINUED_89.png" alt="CONMED_CONTINUED_89" width={811} height={1473} priority />
        <Image src="/images/CONMED_CONTINUED_90.png" alt="CONMED_CONTINUED_90" width={84} height={1473} priority />
      </div>
      <div className="flex">
        <Image src="/images/CONMED_CONTINUED_91.png" alt="CONMED_CONTINUED_91" width={425} height={42} priority />
        <Link href="#top" className="group relative block" style={{ width: 129, height: 42 }}>
          <Image src="/images/CONMED_CONTINUED_92_NATURAL.png" alt="CONMED_CONTINUED_92" width={129} height={42} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/CONMED_CONTINUED_92_OVER.png" alt="CONMED_CONTINUED_92 Hover" width={129} height={42} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/CONMED_CONTINUED_93.png" alt="CONMED_CONTINUED_93" width={425} height={42} priority />
      </div>
    </div>
  );
}





