import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/SMALL-WORLD_02.png" alt="BAYPOP_02" width={769} height={52} priority />
        <Link href="/portfolio_reptowel" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/SMALL-WORLD_03_ARROW_1_NATURAL.png" alt="SMALL-WORLD_03_ARROW_1_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/SMALL-WORLD_03_ARROW_1_OVER.png" alt="SMALL-WORLD_03_ARROW_1_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 52, height: 52 }}>
          <Image src="/images/SMALL-WORLD_03_ARROW_2_NATURAL.png" alt="SMALL-WORLD_03_ARROW_2_NATURAL" width={52} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/SMALL-WORLD_03_ARROW_2_OVER.png" alt="SMALL-WORLD_03_ARROW_2_NATURAL Hover" width={52} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_dj" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/SMALL-WORLD_03_ARROW_3_NATURAL.png" alt="SMALL-WORLD_03_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/SMALL-WORLD_03_ARROW_3_OVER.png" alt="SMALL-WORLD_03_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/SMALL-WORLD_03_ARROW_4.png" alt="SMALL-WORLD_03_ARROW_4" width={84} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/SMALL-WORLD_04.png" alt="SMALL-WORLD_04" width={84} height={704} priority />
        <Image src="/images/SMALL-WORLD_05.png" alt="SMALL-WORLD_05" width={810} height={704} priority />
        <Image src="/images/SMALL-WORLD_06.png" alt="SMALL-WORLD_06" width={85} height={704} priority />
      </div>
      <div className="flex">
        <Image src="/images/SMALL-WORLD_07.png" alt="SMALL-WORLD_07" width={979} height={108} priority />
      </div>
      <div className="flex">
        <Image src="/images/SMALL-WORLD_08.png" alt="SMALL-WORLD_08" width={84} height={634} priority />
        <Image src="/images/SMALL-WORLD_09.png" alt="SMALL-WORLD_09" width={810} height={634} priority />
        <Image src="/images/SMALL-WORLD_10.png" alt="SMALL-WORLD_10" width={85} height={634} priority />
      </div>
      <div className="flex">
        <Image src="/images/SMALL-WORLD_11.png" alt="SMALL-WORLD_11" width={425} height={29} priority />
        <Link href="#top" className="group relative block" style={{ width: 129, height: 29 }}>
          <Image src="/images/SMALL-WORLD_12_NATURAL.png" alt="SMALL-WORLD_12_NATURAL" width={129} height={29} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/SMALL-WORLD_12_OVER.png" alt="SMALL-WORLD_12_NATURAL Hover" width={129} height={29} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/SMALL-WORLD_13.png" alt="SMALL-WORLD_13" width={425} height={29} priority />
      </div>
    </div>
  );
}




