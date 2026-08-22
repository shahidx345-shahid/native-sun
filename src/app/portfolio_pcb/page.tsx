import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/PCB_01_HEADER.png" alt="BAYPOP_02" width={762} height={52} priority />
        <Link href="/portfolio_baypop" className="group relative block" style={{ width: 45, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL" width={45} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_OVER.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL Hover" width={45} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 50, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL" width={50} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_OVER.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL Hover" width={50} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_conmed" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_OVER.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/RAPID_RELIEF_02_ARROW_4_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_4_NATURAL" width={85} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_01_image.png" alt="PCB_01_image" width={979} height={500} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_02_image.png" alt="PCB_02_image" width={979} height={136} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_03.png" alt="PCB_03" width={84} height={454} priority />
        <Image src="/images/PCB_04.png" alt="PCB_04" width={810} height={454} priority />
        <Image src="/images/PCB_05.png" alt="PCB_05" width={85} height={454} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_06.png" alt="PCB_06" width={84} height={454} priority />
        <Image src="/images/PCB_07.png" alt="PCB_07" width={810} height={454} priority />
        <Image src="/images/PCB_08.png" alt="PCB_08" width={85} height={454} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_09.png" alt="PCB_09" width={84} height={514} priority />
        <Image src="/images/PCB_10.png" alt="PCB_10" width={810} height={514} priority />
        <Image src="/images/PCB_11.png" alt="PCB_11" width={85} height={514} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_12.png" alt="PCB_12" width={84} height={1509} priority />
        <Image src="/images/PCB_13.png" alt="PCB_13" width={810} height={1509} priority />
        <Image src="/images/PCB_14.png" alt="PCB_14" width={85} height={1509} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_15.png" alt="PCB_15" width={84} height={2903} priority />
        <Image src="/images/PCB_16.png" alt="PCB_16" width={810} height={2903} priority />
        <Image src="/images/PCB_17.png" alt="PCB_17" width={85} height={2903} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_18.png" alt="PCB_18" width={84} height={2000} priority />
        <Image src="/images/PCB_19.png" alt="PCB_19" width={810} height={2000} priority />
        <Image src="/images/PCB_20.png" alt="PCB_20" width={85} height={2000} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_21.png" alt="PCB_21" width={84} height={412} priority />
        <Image src="/images/PCB_22.png" alt="PCB_22" width={810} height={412} priority />
        <Image src="/images/PCB_23.png" alt="PCB_23" width={85} height={412} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_24.png" alt="PCB_24" width={84} height={412} priority />
        <Image src="/images/PCB_25.png" alt="PCB_25" width={810} height={412} priority />
        <Image src="/images/PCB_26.png" alt="PCB_26" width={85} height={412} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_27.png" alt="PCB_27" width={84} height={412} priority />
        <Image src="/images/PCB_28.png" alt="PCB_28" width={810} height={412} priority />
        <Image src="/images/PCB_29.png" alt="PCB_29" width={85} height={412} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_30.png" alt="PCB_30" width={84} height={411} priority />
        <Image src="/images/PCB_31.png" alt="PCB_31" width={810} height={411} priority />
        <Image src="/images/PCB_32.png" alt="PCB_32" width={85} height={411} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_33.png" alt="PCB_33" width={84} height={627} priority />
        <Image src="/images/PCB_34.png" alt="PCB_34" width={810} height={627} priority />
        <Image src="/images/PCB_35.png" alt="PCB_35" width={85} height={627} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_36.png" alt="PCB_36" width={84} height={601} priority />
        <Image src="/images/PCB_37.png" alt="PCB_37" width={810} height={601} priority />
        <Image src="/images/PCB_38.png" alt="PCB_38" width={85} height={601} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_39.png" alt="PCB_39" width={84} height={775} priority />
        <Image src="/images/PCB_40.png" alt="PCB_40" width={810} height={775} priority />
        <Image src="/images/PCB_41.png" alt="PCB_41" width={85} height={775} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_42.png" alt="PCB_42" width={84} height={890} priority />
        <Image src="/images/PCB_43.png" alt="PCB_43" width={810} height={890} priority />
        <Image src="/images/PCB_44.png" alt="PCB_44" width={85} height={890} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_45.png" alt="PCB_45" width={84} height={1069} priority />
        <Image src="/images/PCB_46.png" alt="PCB_46" width={810} height={1069} priority />
        <Image src="/images/PCB_47.png" alt="PCB_47" width={85} height={1069} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_48.png" alt="PCB_48" width={84} height={1180} priority />
        <Image src="/images/PCB_49.png" alt="PCB_49" width={810} height={1180} priority />
        <Image src="/images/PCB_50.png" alt="PCB_50" width={85} height={1180} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_51.png" alt="PCB_51" width={84} height={1071} priority />
        <Image src="/images/PCB_52.png" alt="PCB_52" width={810} height={1071} priority />
        <Image src="/images/PCB_53.png" alt="PCB_53" width={85} height={1071} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_54.png" alt="PCB_54" width={84} height={884} priority />
        <Image src="/images/PCB_55.png" alt="PCB_55" width={810} height={884} priority />
        <Image src="/images/PCB_56.png" alt="PCB_56" width={85} height={884} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_57.png" alt="PCB_57" width={84} height={524} priority />
        <Image src="/images/PCB_58.png" alt="PCB_58" width={810} height={524} priority />
        <Image src="/images/PCB_59.png" alt="PCB_59" width={85} height={524} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_60.png" alt="PCB_60" width={84} height={603} priority />
        <Image src="/images/PCB_61.png" alt="PCB_61" width={810} height={603} priority />
        <Image src="/images/PCB_62.png" alt="PCB_62" width={85} height={603} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_63.png" alt="PCB_63" width={84} height={943} priority />
        <Image src="/images/PCB_64.png" alt="PCB_64" width={810} height={943} priority />
        <Image src="/images/PCB_65.png" alt="PCB_65" width={85} height={943} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_66.png" alt="PCB_66" width={84} height={907} priority />
        <Image src="/images/PCB_67.png" alt="PCB_67" width={810} height={907} priority />
        <Image src="/images/PCB_68.png" alt="PCB_68" width={85} height={907} priority />
      </div>
      <div className="flex">
        <Image src="/images/PCB_69.png" alt="PCB_69" width={425} height={31} priority />
        <Link href="#top" className="group relative block" style={{ width: 129, height: 31 }}>
          <Image src="/images/PCB_70_NATURAL.png" alt="PCB_70_NATURAL" width={129} height={31} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/PCB_70_OVER.png" alt="PCB_70_NATURAL Hover" width={129} height={31} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/PCB_71.png" alt="PCB_71" width={425} height={31} priority />
      </div>
    </div>
  );
}





