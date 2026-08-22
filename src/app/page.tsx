import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Welcome Intro Section */}
      <div>
        <Image src="/images/HOME_WELCOME-INTRO_08.png" alt="Welcome Intro" width={979} height={139} priority />
        
        <div className="flex">
          <Image src="/images/HOME_WELCOME-INTRO_08_A.png" alt="Spacer" width={173} height={22} priority />
          <Link href="/portfolio" className="block" style={{ width: 86, height: 22 }}>
            <Image src="/images/HOME_WELCOME-INTRO_08_B_NATURAL.png" alt="View Portfolio" width={86} height={22} priority />
          </Link>
          <Image src="/images/HOME_WELCOME-INTRO_08_C.png" alt="Spacer" width={720} height={22} priority />
        </div>

        <Image src="/images/HOME_WELCOME-INTRO_08_D.png" alt="Spacer bottom" width={979} height={37} priority />
      </div>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section Marker */}
      <div id="services">
        <Image src="/images/HOME_11.png" alt="Services Separator" width={979} height={93} />
      </div>

      {/* Featured Projects / Middle Content */}
      <Image src="/images/INDEX_HOME_01.png" alt="Spacer" width={979} height={96} />
      
      <div className="flex">
        <Image src="/images/INDEX_HOME_02.png" alt="Spacer" width={111} height={214} />
        
        <Link 
          href="/portfolio" 
          className="group relative block bg-[#FFFFFF] border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 overflow-hidden" 
          style={{ width: 256, height: 214 }}
        >
          <Image src="/images/INDEX_HOME_03_BUTTON_NATURAL.png" alt="Baypop Project" width={256} height={214} className="absolute inset-0 group-hover:opacity-0 transition-all duration-300" />
          <Image src="/images/INDEX_HOME_03_BUTTON_OVER.png" alt="Baypop Project" width={256} height={214} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </Link>

        <Link 
          href="/portfolio" 
          className="group relative block bg-[#FFFFFF] border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 overflow-hidden" 
          style={{ width: 245, height: 214 }}
        >
          <Image src="/images/INDEX_HOME_04_BUTTON_NATURAL.png" alt="PCB Project" width={245} height={214} className="absolute inset-0 group-hover:opacity-0 transition-all duration-300" />
          <Image src="/images/INDEX_HOME_04_BUTTON_OVER.png" alt="PCB Project" width={245} height={214} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </Link>

        <Link 
          href="/portfolio" 
          className="group relative block bg-[#FFFFFF] border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 overflow-hidden" 
          style={{ width: 256, height: 214 }}
        >
          <Image src="/images/INDEX_HOME_05_BUTTON_NATURAL.png" alt="FIME Project" width={256} height={214} className="absolute inset-0 group-hover:opacity-0 transition-all duration-300" />
          <Image src="/images/INDEX_HOME_05_BUTTON_OVER.png" alt="FIME Project" width={256} height={214} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </Link>

        <Image src="/images/INDEX_HOME_06.png" alt="Spacer" width={111} height={214} />
      </div>

      <Image src="/images/INDEX_HOME_07.png" alt="Spacer" width={979} height={96} />
      <Image src="/images/INDEX_HOME_08.png" alt="Services Details" width={979} height={259} />
      </div>
  );
}

