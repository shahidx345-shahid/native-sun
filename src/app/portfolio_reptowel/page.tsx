import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/REPTOWEL_01_HEADER.png" alt="REPTOWEL_01_HEADER" width={762} height={52} priority />
        <Link href="/portfolio_fime" className="group relative block" style={{ width: 45, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL" width={45} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_1_OVER.png" alt="RAPID_RELIEF_02_ARROW_1_NATURAL Hover" width={45} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 50, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL" width={50} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_2_OVER.png" alt="RAPID_RELIEF_02_ARROW_2_NATURAL Hover" width={50} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_illustrations" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/RAPID_RELIEF_02_ARROW_3_OVER.png" alt="RAPID_RELIEF_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/RAPID_RELIEF_02_ARROW_4_NATURAL.png" alt="RAPID_RELIEF_02_ARROW_4_NATURAL" width={85} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_03_HEADER.png" alt="REPTOWEL_03_HEADER" width={979} height={24} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_03.png" alt="REPTOWEL_03" width={84} height={553} priority />
        <Image src="/images/REPTOWEL_04.png" alt="REPTOWEL_04" width={810} height={553} priority />
        <Image src="/images/REPTOWEL_05.png" alt="REPTOWEL_05" width={84} height={553} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_06.png" alt="REPTOWEL_06" width={979} height={119} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_07.png" alt="REPTOWEL_07" width={84} height={612} priority />
        <Image src="/images/REPTOWEL_08.png" alt="REPTOWEL_08" width={810} height={612} priority />
        <Image src="/images/REPTOWEL_09.png" alt="REPTOWEL_09" width={85} height={612} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_10.png" alt="REPTOWEL_10" width={84} height={595} priority />
        <Image src="/images/REPTOWEL_11.png" alt="REPTOWEL_11" width={810} height={595} priority />
        <Image src="/images/REPTOWEL_12.png" alt="REPTOWEL_12" width={84} height={595} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_13.png" alt="REPTOWEL_13" width={84} height={1248} priority />
        <Image src="/images/REPTOWEL_14.png" alt="REPTOWEL_14" width={810} height={1248} priority />
        <Image src="/images/REPTOWEL_15.png" alt="REPTOWEL_15" width={84} height={1248} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_16.png" alt="REPTOWEL_16" width={84} height={3893} priority />
        <Image src="/images/REPTOWEL_17.png" alt="REPTOWEL_17" width={810} height={3893} priority />
        <Image src="/images/REPTOWEL_18.png" alt="REPTOWEL_18" width={84} height={3893} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_19.png" alt="REPTOWEL_19" width={84} height={831} priority />
        <Image src="/images/REPTOWEL_20.png" alt="REPTOWEL_20" width={810} height={831} priority />
        <Image src="/images/REPTOWEL_21.png" alt="REPTOWEL_21" width={84} height={831} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_22.png" alt="REPTOWEL_22" width={84} height={932} priority />
        <Image src="/images/REPTOWEL_23.png" alt="REPTOWEL_23" width={810} height={932} priority />
        <Image src="/images/REPTOWEL_24.png" alt="REPTOWEL_24" width={85} height={932} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_25.png" alt="REPTOWEL_25" width={84} height={543} priority />
        <Image src="/images/REPTOWEL_26.png" alt="REPTOWEL_26" width={811} height={543} priority />
        <Image src="/images/REPTOWEL_27.png" alt="REPTOWEL_27" width={84} height={543} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_28.png" alt="REPTOWEL_28" width={84} height={750} priority />
        <Image src="/images/REPTOWEL_29.png" alt="REPTOWEL_29" width={811} height={750} priority />
        <Image src="/images/REPTOWEL_30.png" alt="REPTOWEL_30" width={83} height={750} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_31.png" alt="REPTOWEL_31" width={84} height={726} priority />
        <Image src="/images/REPTOWEL_32.png" alt="REPTOWEL_32" width={811} height={726} priority />
        <Image src="/images/REPTOWEL_33.png" alt="REPTOWEL_33" width={83} height={726} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_34.png" alt="REPTOWEL_34" width={84} height={510} priority />
        <Image src="/images/REPTOWEL_35.png" alt="REPTOWEL_35" width={810} height={511} priority />
        <Image src="/images/REPTOWEL_36.png" alt="REPTOWEL_36" width={84} height={510} priority />
      </div>
      <div className="flex">
        <Image src="/images/REPTOWEL_37.png" alt="REPTOWEL_37" width={84} height={619} priority />
        <Image src="/images/REPTOWEL_38.png" alt="REPTOWEL_38" width={810} height={619} priority />
        <Image src="/images/REPTOWEL_39.png" alt="REPTOWEL_39" width={83} height={619} priority />
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





