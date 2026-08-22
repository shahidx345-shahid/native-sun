import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/ALKEMITE_01.png" alt="ALKEMITE_01" width={769} height={52} priority />
        <Link href="/portfolio_amedis" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/ALKEMITE_02_ARROW_1_NATURAL.png" alt="ALKEMITE_02_ARROW_1_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/ALKEMITE_02_ARROW_1_OVER.png" alt="ALKEMITE_02_ARROW_1_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 52, height: 52 }}>
          <Image src="/images/ALKEMITE_02_ARROW_2_NATURAL.png" alt="ALKEMITE_02_ARROW_2_NATURAL" width={52} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/ALKEMITE_02_ARROW_2_OVER.png" alt="ALKEMITE_02_ARROW_2_NATURAL Hover" width={52} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_rapidrelief" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/ALKEMITE_02_ARROW_3_NATURAL.png" alt="ALKEMITE_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/ALKEMITE_02_ARROW_3_OVER.png" alt="ALKEMITE_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/ALKEMITE_02_ARROW_4_NATURAL.png" alt="ALKEMITE_02_ARROW_4_NATURAL" width={84} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_03.png" alt="ALKEMITE_03" width={84} height={592} priority />
        <Image src="/images/ALKEMITE_04.png" alt="ALKEMITE_04" width={810} height={592} priority />
        <Image src="/images/ALKEMITE_05.png" alt="ALKEMITE_05" width={85} height={592} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_06.png" alt="ALKEMITE_06" width={979} height={134} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_07.png" alt="ALKEMITE_07" width={84} height={580} priority />
        <Image src="/images/ALKEMITE_08.png" alt="ALKEMITE_08" width={810} height={580} priority />
        <Image src="/images/ALKEMITE_09.png" alt="ALKEMITE_09" width={85} height={580} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_10.png" alt="ALKEMITE_10" width={84} height={632} priority />
        <Image src="/images/ALKEMITE_11.png" alt="ALKEMITE_11" width={810} height={632} priority />
        <Image src="/images/ALKEMITE_12.png" alt="ALKEMITE_12" width={85} height={632} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_13.png" alt="ALKEMITE_13" width={84} height={874} priority />
        <Image src="/images/ALKEMITE_14.png" alt="ALKEMITE_14" width={810} height={874} priority />
        <Image src="/images/ALKEMITE_15.png" alt="ALKEMITE_15" width={85} height={874} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_16.png" alt="ALKEMITE_16" width={84} height={610} priority />
        <Image src="/images/ALKEMITE_17.png" alt="ALKEMITE_17" width={810} height={610} priority />
        <Image src="/images/ALKEMITE_18.png" alt="ALKEMITE_18" width={85} height={610} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_18A.png" alt="ALKEMITE_18A" width={85} height={577} priority />
        <Image src="/images/ALKEMITE_18B.png" alt="ALKEMITE_18B" width={809} height={577} priority />
        <Image src="/images/ALKEMITE_18C.png" alt="ALKEMITE_18C" width={85} height={577} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_18D.png" alt="ALKEMITE_18D" width={85} height={759} priority />
        <Image src="/images/ALKEMITE_18E.png" alt="ALKEMITE_18E" width={809} height={759} priority />
        <Image src="/images/ALKEMITE_18F.png" alt="ALKEMITE_18F" width={85} height={759} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_18G.png" alt="ALKEMITE_18G" width={84} height={702} priority />
        <Image src="/images/ALKEMITE_18H.png" alt="ALKEMITE_18H" width={811} height={702} priority />
        <Image src="/images/ALKEMITE_18I.png" alt="ALKEMITE_18I" width={84} height={702} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_18J.png" alt="ALKEMITE_18J" width={84} height={701} priority />
        <Image src="/images/ALKEMITE_18K.png" alt="ALKEMITE_18K" width={811} height={701} priority />
        <Image src="/images/ALKEMITE_18L.png" alt="ALKEMITE_18L" width={84} height={701} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_18M.png" alt="ALKEMITE_18M" width={84} height={570} priority />
        <Image src="/images/ALKEMITE_18N.png" alt="ALKEMITE_18N" width={810} height={570} priority />
        <Image src="/images/ALKEMITE_18O.png" alt="ALKEMITE_18O" width={84} height={570} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_18P.png" alt="ALKEMITE_18P" width={85} height={638} priority />
        <Image src="/images/ALKEMITE_18Q.png" alt="ALKEMITE_18Q" width={810} height={638} priority />
        <Image src="/images/ALKEMITE_18R.png" alt="ALKEMITE_18R" width={84} height={638} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_18S.png" alt="ALKEMITE_18S" width={85} height={1089} priority />
        <Image src="/images/ALKEMITE_18T.png" alt="ALKEMITE_18T" width={810} height={1089} priority />
        <Image src="/images/ALKEMITE_18U.png" alt="ALKEMITE_18U" width={84} height={1089} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_18V.png" alt="ALKEMITE_18V" width={85} height={627} priority />
        <Image src="/images/ALKEMITE_18W.png" alt="ALKEMITE_18W" width={809} height={627} priority />
        <Image src="/images/ALKEMITE_18X.png" alt="ALKEMITE_18X" width={85} height={627} priority />
      </div>
      <div className="flex">
        <Image src="/images/ALKEMITE_19.png" alt="ALKEMITE_19" width={413} height={22} priority />
        <Link href="#top" className="group relative block" style={{ width: 125, height: 22 }}>
          <Image src="/images/ALKEMITE_20_NATURAL.png" alt="ALKEMITE_20_NATURAL" width={125} height={22} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/ALKEMITE_20_OVER.png" alt="ALKEMITE_20_NATURAL Hover" width={125} height={22} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/ALKEMITE_21.png" alt="ALKEMITE_21" width={413} height={22} priority />
      </div>
    </div>
  );
}




