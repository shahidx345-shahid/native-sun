import Image from "next/image";
import Link from "next/link";

function PortfolioBox({
  href,
  naturalSrc,
  overSrc,
  width,
  height,
  alt,
}: {
  href: string;
  naturalSrc: string;
  overSrc: string;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <Link href={href} className="group relative block bg-[#FAFAFA] border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 overflow-hidden" style={{ width, height }}>
      <Image
        src={naturalSrc}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200"
      />
      <Image
        src={overSrc}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
    </Link>
  );
}

export default function Portfolio() {
  return (
    <div className="flex flex-col bg-[#FFFFFF]">
      <Image src="/images/PORTFOLIO_01.png" alt="Portfolio" width={979} height={154} priority className="portfolio-header-fix" />
      
      <div>
        <div className="flex">
          <div style={{ width: 84, height: 102 }} />
          <Image src="/images/PORTFOLIO_03_FEATURED-PROJECTS-TYPE.png" alt="Featured Projects" width={809} height={102} priority />
          <div style={{ width: 86, height: 102 }} />
        </div>

      {/* Row 1 */}
      <div className="flex">
        <div style={{ width: 84, height: 220 }} />
        <div style={{ width: 37, height: 220 }} />
        <PortfolioBox href="/portfolio_baypop" naturalSrc="/images/PORTFOLIO_07_FEATURE-BOX1_NATURAL.png" overSrc="/images/PORTFOLIO_07_FEATURE-BOX1_OVER.png" width={244} height={220} alt="Baypop" />
        <PortfolioBox href="/portfolio_pcb" naturalSrc="/images/PORTFOLIO_08_FEATURE-BOX2_NATURAL.png" overSrc="/images/PORTFOLIO_08_FEATURE-BOX2_OVER.png" width={249} height={220} alt="PCB" />
        <PortfolioBox href="/portfolio_conmed" naturalSrc="/images/PORTFOLIO_09_FEATURE-BOX3_NATURAL.png" overSrc="/images/PORTFOLIO_09_FEATURE-BOX3_OVER.png" width={243} height={220} alt="Conmed" />
        <div style={{ width: 36, height: 220 }} />
        <div style={{ width: 86, height: 220 }} />
      </div>

      {/* Row 2 */}
      <div className="flex">
        <div style={{ width: 84, height: 227 }} />
        <div style={{ width: 37, height: 227 }} />
        <PortfolioBox href="/portfolio_conmed_continued" naturalSrc="/images/PORTFOLIO_14_FEATURE-BOX4_NATURAL.png" overSrc="/images/PORTFOLIO_14_FEATURE-BOX4_OVER.png" width={244} height={227} alt="Conmed Continued" />
        <PortfolioBox href="/portfolio_jabil_one" naturalSrc="/images/PORTFOLIO_15_FEATURE-BOX5_NATURAL.png" overSrc="/images/PORTFOLIO_15_FEATURE-BOX5_OVER.png" width={249} height={227} alt="Jabil 1" />
        <PortfolioBox href="/portfolio_jabil_two" naturalSrc="/images/PORTFOLIO_16_FEATURE-BOX6_NATURAL.png" overSrc="/images/PORTFOLIO_16_FEATURE-BOX6_OVER.png" width={243} height={227} alt="Jabil 2" />
        <div style={{ width: 36, height: 227 }} />
        <div style={{ width: 86, height: 227 }} />
      </div>

      {/* Row 3 */}
      <div className="flex">
        <div style={{ width: 84, height: 228 }} />
        <div style={{ width: 37, height: 228 }} />
        <PortfolioBox href="/portfolio_newbreed" naturalSrc="/images/PORTFOLIO_21_FEATURE-BOX7_NATURAL.png" overSrc="/images/PORTFOLIO_21_FEATURE-BOX7_OVER.png" width={244} height={228} alt="New Breed" />
        <PortfolioBox href="/portfolio_golden_apple" naturalSrc="/images/PORTFOLIO_22_FEATURE-BOX8_NATURAL.png" overSrc="/images/PORTFOLIO_22_FEATURE-BOX8_OVER.png" width={249} height={228} alt="Golden Apple" />
        <PortfolioBox href="/portfolio_thompson" naturalSrc="/images/PORTFOLIO_23_FEATURE-BOX9_NATURAL.png" overSrc="/images/PORTFOLIO_23_FEATURE-BOX9_OVER.png" width={243} height={228} alt="Thompson" />
        <div style={{ width: 36, height: 228 }} />
        <div style={{ width: 86, height: 228 }} />
      </div>

      {/* Row 4 */}
      <div className="flex">
        <div style={{ width: 84, height: 233 }} />
        <div style={{ width: 37, height: 233 }} />
        <PortfolioBox href="/portfolio_amedis" naturalSrc="/images/PORTFOLIO_28_FEATURE-BOX13_NATURAL.png" overSrc="/images/PORTFOLIO_28_FEATURE-BOX13_OVER.png" width={244} height={233} alt="Amedis" />
        <PortfolioBox href="/portfolio_alkemite" naturalSrc="/images/PORTFOLIO_29_FEATURE-BOX14_NATURAL.png" overSrc="/images/PORTFOLIO_29_FEATURE-BOX14_OVER.png" width={249} height={233} alt="Alkemite" />
        <PortfolioBox href="/portfolio_rapidrelief" naturalSrc="/images/PORTFOLIO_30_FEATURE-BOX15_NATURAL.png" overSrc="/images/PORTFOLIO_30_FEATURE-BOX15_OVER.png" width={243} height={233} alt="Rapid Relief" />
        <div style={{ width: 36, height: 233 }} />
        <div style={{ width: 86, height: 233 }} />
      </div>

      {/* Row 5 */}
      <div className="flex">
        {/* We emulate the same structure: 84 + 37 + 244 + 249 + 243 + 36 + 86 */}
        <div style={{ width: 84, height: 230 }} /> {/* PORTFOLIO_32A */}
        <div style={{ width: 37, height: 230 }} /> {/* PORTFOLIO_32B */}
        <PortfolioBox href="/portfolio_legaseeds" naturalSrc="/images/PORTFOLIO_31A_FEATURE-BOX16_NATURAL.png" overSrc="/images/PORTFOLIO_31A_FEATURE-BOX16_OVER.png" width={244} height={230} alt="Legaseeds" />
        <PortfolioBox href="/portfolio_casual_living" naturalSrc="/images/PORTFOLIO_32_FEATURE-BOX17_NATURAL.png" overSrc="/images/PORTFOLIO_32_FEATURE-BOX17_OVER.png" width={249} height={230} alt="Casual Living" />
        <PortfolioBox href="/portfolio_fime" naturalSrc="/images/PORTFOLIO_33_FEATURE-BOX18_NATURAL.png" overSrc="/images/PORTFOLIO_33_FEATURE-BOX18_OVER.png" width={243} height={230} alt="Fime" />
        <div style={{ width: 36, height: 230 }} /> {/* PORTFOLIO_34 */}
        <div style={{ width: 86, height: 230 }} />
      </div>

      {/* Row 6 */}
      <div className="flex">
        {/* Same structure but only 2 projects + empty space for 3rd */}
        <div style={{ width: 84, height: 232 }} /> {/* PORTFOLIO_35A */}
        <div style={{ width: 37, height: 232 }} /> {/* PORTFOLIO_36B */}
        <PortfolioBox href="/portfolio_reptowel" naturalSrc="/images/PORTFOLIO_38A_FEATURE-BOX19_NATURAL.png" overSrc="/images/PORTFOLIO_38A_FEATURE-BOX19_OVER.png" width={244} height={232} alt="Reptowel" />
        <PortfolioBox href="/portfolio_illustrations" naturalSrc="/images/PORTFOLIO_39_FEATURE-BOX20_NATURAL.png" overSrc="/images/PORTFOLIO_39_FEATURE-BOX20_OVER.png" width={249} height={232} alt="Illustrations" />
        <div style={{ width: 365, height: 232 }} /> {/* The remaining space */}
      </div>
      </div>

      </div>
  );
}

