import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex header-image-fix">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_02.png" alt="BAYPOP_02" width={769} height={52} priority />
        <Link href="/portfolio_reptowel" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/ILLUSTRATIONS_03_ARROW_1_NATURAL.png" alt="ILLUSTRATIONS_03_ARROW_1_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/ILLUSTRATIONS_03_ARROW_1_OVER.png" alt="ILLUSTRATIONS_03_ARROW_1_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 52, height: 52 }}>
          <Image src="/images/ILLUSTRATIONS_03_ARROW_2_NATURAL.png" alt="ILLUSTRATIONS_03_ARROW_2_NATURAL" width={52} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/ILLUSTRATIONS_03_ARROW_2_OVER.png" alt="ILLUSTRATIONS_03_ARROW_2_NATURAL Hover" width={52} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/ILLUSTRATIONS_03_ARROW_3_NATURAL.png" alt="ILLUSTRATIONS_03_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/ILLUSTRATIONS_03_ARROW_3_OVER.png" alt="ILLUSTRATIONS_03_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/ILLUSTRATIONS_03_ARROW_4.png" alt="ILLUSTRATIONS_03_ARROW_4" width={84} height={52} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_04.png" alt="ILLUSTRATIONS_04" width={84} height={921} priority />
        <Image src="/images/ILLUSTRATIONS_05.png" alt="ILLUSTRATIONS_05" width={810} height={921} priority />
        <Image src="/images/ILLUSTRATIONS_06.png" alt="ILLUSTRATIONS_06" width={85} height={921} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_07.png" alt="ILLUSTRATIONS_07" width={979} height={115} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_08.png" alt="ILLUSTRATIONS_08" width={84} height={894} priority />
        <Image src="/images/ILLUSTRATIONS_09.png" alt="ILLUSTRATIONS_09" width={809} height={894} priority />
        <Image src="/images/ILLUSTRATIONS_10.png" alt="ILLUSTRATIONS_10" width={86} height={894} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_11.png" alt="ILLUSTRATIONS_11" width={84} height={1042} priority />
        <Image src="/images/ILLUSTRATIONS_12.png" alt="ILLUSTRATIONS_12" width={810} height={1042} priority />
        <Image src="/images/ILLUSTRATIONS_13.png" alt="ILLUSTRATIONS_13" width={85} height={1042} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_14.png" alt="ILLUSTRATIONS_14" width={84} height={1042} priority />
        <Image src="/images/ILLUSTRATIONS_15.png" alt="ILLUSTRATIONS_15" width={810} height={1042} priority />
        <Image src="/images/ILLUSTRATIONS_16.png" alt="ILLUSTRATIONS_16" width={85} height={1042} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_17.png" alt="ILLUSTRATIONS_17" width={84} height={1144} priority />
        <Image src="/images/ILLUSTRATIONS_18.png" alt="ILLUSTRATIONS_18" width={810} height={1144} priority />
        <Image src="/images/ILLUSTRATIONS_19.png" alt="ILLUSTRATIONS_19" width={85} height={1144} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_20.png" alt="ILLUSTRATIONS_20" width={84} height={856} priority />
        <Image src="/images/ILLUSTRATIONS_21.png" alt="ILLUSTRATIONS_21" width={810} height={856} priority />
        <Image src="/images/ILLUSTRATIONS_22.png" alt="ILLUSTRATIONS_22" width={85} height={856} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_23.png" alt="ILLUSTRATIONS_23" width={84} height={874} priority />
        <Image src="/images/ILLUSTRATIONS_24.png" alt="ILLUSTRATIONS_24" width={810} height={874} priority />
        <Image src="/images/ILLUSTRATIONS_25.png" alt="ILLUSTRATIONS_25" width={85} height={874} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_26.png" alt="ILLUSTRATIONS_26" width={84} height={1034} priority />
        <Image src="/images/ILLUSTRATIONS_27.png" alt="ILLUSTRATIONS_27" width={810} height={1034} priority />
        <Image src="/images/ILLUSTRATIONS_28.png" alt="ILLUSTRATIONS_28" width={85} height={1034} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_29.png" alt="ILLUSTRATIONS_29" width={84} height={594} priority />
        <Image src="/images/ILLUSTRATIONS_30.png" alt="ILLUSTRATIONS_30" width={810} height={594} priority />
        <Image src="/images/ILLUSTRATIONS_31.png" alt="ILLUSTRATIONS_31" width={85} height={594} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_35.png" alt="ILLUSTRATIONS_35" width={84} height={828} priority />
        <Image src="/images/ILLUSTRATIONS_36.png" alt="ILLUSTRATIONS_36" width={810} height={828} priority />
        <Image src="/images/ILLUSTRATIONS_37.png" alt="ILLUSTRATIONS_37" width={85} height={828} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_38.png" alt="ILLUSTRATIONS_38" width={85} height={722} priority />
        <Image src="/images/ILLUSTRATIONS_39.png" alt="ILLUSTRATIONS_39" width={809} height={721} priority />
        <Image src="/images/ILLUSTRATIONS_40.png" alt="ILLUSTRATIONS_40" width={85} height={721} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_41.png" alt="ILLUSTRATIONS_41" width={85} height={1167} priority />
        <Image src="/images/ILLUSTRATIONS_42.png" alt="ILLUSTRATIONS_42" width={809} height={1168} priority />
        <Image src="/images/ILLUSTRATIONS_43.png" alt="ILLUSTRATIONS_43" width={85} height={1168} priority />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ILLUSTRATIONS_44.png" alt="ILLUSTRATIONS_44" width={85} height={1159} priority />
        <Image src="/images/ILLUSTRATIONS_45.png" alt="ILLUSTRATIONS_45" width={809} height={1159} priority />
        <Image src="/images/ILLUSTRATIONS_46.png" alt="ILLUSTRATIONS_46" width={85} height={1159} priority />
      </div>
      <div className="flex header-image-fix">
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




