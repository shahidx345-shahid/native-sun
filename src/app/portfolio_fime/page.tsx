import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] project-body-fix">
      <div className="flex">
        <Link href="#top" className="block" style={{ width: 979, height: 69 }}>
          <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
        </Link>
      </div>
      <div className="flex header-image-fix">
        <Image src="/images/FIME_01.png" alt="FIME_01" width={769} height={52} priority />
        <Link href="/portfolio_casual_living" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/FIME_02_ARROW_1_NATURAL.png" alt="FIME_02_ARROW_1_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/FIME_02_ARROW_1_OVER.png" alt="FIME_02_ARROW_1_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio" className="group relative block" style={{ width: 52, height: 52 }}>
          <Image src="/images/FIME_02_ARROW_2_NATURAL.png" alt="FIME_02_ARROW_2_NATURAL" width={52} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/FIME_02_ARROW_2_OVER.png" alt="FIME_02_ARROW_2_NATURAL Hover" width={52} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Link href="/portfolio_reptowel" className="group relative block" style={{ width: 37, height: 52 }}>
          <Image src="/images/FIME_02_ARROW_3_NATURAL.png" alt="FIME_02_ARROW_3_NATURAL" width={37} height={52} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/FIME_02_ARROW_3_OVER.png" alt="FIME_02_ARROW_3_NATURAL Hover" width={37} height={52} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/FIME_02_ARROW_4_NATURAL.png" alt="FIME_02_ARROW_4_NATURAL" width={84} height={52} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_05.png" alt="FIME_05" width={979} height={38} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_06.png" alt="FIME_06" width={84} height={418} priority />
        <Image src="/images/FIME_07.png" alt="FIME_07" width={811} height={418} priority />
        <Image src="/images/FIME_08.png" alt="FIME_08" width={84} height={418} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_09.png" alt="FIME_09" width={979} height={165} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_10.png" alt="FIME_10" width={84} height={784} priority />
        <Image src="/images/FIME_11.png" alt="FIME_11" width={811} height={784} priority />
        <Image src="/images/FIME_12.png" alt="FIME_12" width={84} height={784} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_13.png" alt="FIME_13" width={84} height={573} priority />
        <Image src="/images/FIME_14.png" alt="FIME_14" width={811} height={573} priority />
        <Image src="/images/FIME_15.png" alt="FIME_15" width={84} height={573} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_16.png" alt="FIME_16" width={84} height={577} priority />
        <Image src="/images/FIME_17.png" alt="FIME_17" width={811} height={577} priority />
        <Image src="/images/FIME_18.png" alt="FIME_18" width={84} height={577} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_19.png" alt="FIME_19" width={84} height={653} priority />
        <Image src="/images/FIME_20.png" alt="FIME_20" width={811} height={653} priority />
        <Image src="/images/FIME_21.png" alt="FIME_21" width={84} height={653} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_22.png" alt="FIME_22" width={84} height={567} priority />
        <Image src="/images/FIME_23.png" alt="FIME_23" width={811} height={567} priority />
        <Image src="/images/FIME_24.png" alt="FIME_24" width={84} height={567} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_25.png" alt="FIME_25" width={84} height={552} priority />
        <Image src="/images/FIME_26.png" alt="FIME_26" width={811} height={552} priority />
        <Image src="/images/FIME_27.png" alt="FIME_27" width={84} height={552} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_28.png" alt="FIME_28" width={84} height={558} priority />
        <Image src="/images/FIME_29.png" alt="FIME_29" width={811} height={558} priority />
        <Image src="/images/FIME_30.png" alt="FIME_30" width={84} height={558} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_31.png" alt="FIME_31" width={84} height={577} priority />
        <Image src="/images/FIME_32.png" alt="FIME_32" width={811} height={577} priority />
        <Image src="/images/FIME_33.png" alt="FIME_33" width={84} height={577} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_34.png" alt="FIME_34" width={84} height={1994} priority />
        <Image src="/images/FIME_35.png" alt="FIME_35" width={811} height={1994} priority />
        <Image src="/images/FIME_36.png" alt="FIME_36" width={84} height={1994} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_37.png" alt="FIME_37" width={84} height={4093} priority />
        <Image src="/images/FIME_38.png" alt="FIME_38" width={811} height={4093} priority />
        <Image src="/images/FIME_39.png" alt="FIME_39" width={84} height={4093} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_40.png" alt="FIME_40" width={84} height={2243} priority />
        <Image src="/images/FIME_41.png" alt="FIME_41" width={810} height={2243} priority />
        <Image src="/images/FIME_42.png" alt="FIME_42" width={85} height={2243} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_43.png" alt="FIME_43" width={85} height={2845} priority />
        <Image src="/images/FIME_44.png" alt="FIME_44" width={809} height={2845} priority />
        <Image src="/images/FIME_45.png" alt="FIME_45" width={85} height={2845} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_46.png" alt="FIME_46" width={85} height={609} priority />
        <Image src="/images/FIME_47.png" alt="FIME_47" width={810} height={609} priority />
        <Image src="/images/FIME_48.png" alt="FIME_48" width={84} height={609} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_49.png" alt="FIME_49" width={84} height={648} priority />
        <Image src="/images/FIME_50.png" alt="FIME_50" width={811} height={648} priority />
        <Image src="/images/FIME_51.png" alt="FIME_51" width={84} height={648} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_52.png" alt="FIME_52" width={84} height={644} priority />
        <Image src="/images/FIME_53.png" alt="FIME_53" width={811} height={644} priority />
        <Image src="/images/FIME_54.png" alt="FIME_54" width={84} height={644} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_55.png" alt="FIME_55" width={85} height={963} priority />
        <Image src="/images/FIME_56.png" alt="FIME_56" width={809} height={963} priority />
        <Image src="/images/FIME_57.png" alt="FIME_57" width={84} height={963} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_58.png" alt="FIME_58" width={85} height={637} priority />
        <Image src="/images/FIME_59.png" alt="FIME_59" width={809} height={637} priority />
        <Image src="/images/FIME_60.png" alt="FIME_60" width={84} height={637} priority />
      </div>
      <div className="flex">
        <Image src="/images/FIME_61.png" alt="FIME_61" width={425} height={30} priority />
        <Link href="#top" className="group relative block" style={{ width: 130, height: 30 }}>
          <Image src="/images/FIME_62_NATURAL.png" alt="FIME_62_NATURAL" width={130} height={30} className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200" priority />
          <Image src="/images/FIME_62_OVER.png" alt="FIME_62_NATURAL Hover" width={130} height={30} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" priority />
        </Link>
        <Image src="/images/FIME_63.png" alt="FIME_63" width={424} height={30} priority />
      </div>
    </div>
  );
}




