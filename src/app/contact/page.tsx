import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] page-white-fix min-h-[550px]">
      <div style={{ width: 979, height: 69, backgroundColor: "#FFFFFF" }} />
      <Image src="/images/CONTACT_VERT_01.png" alt="Contact 1" width={979} height={42} priority />
      <Image src="/images/CONTACT_VERT_02.png" alt="Contact 2" width={979} height={44} priority />

      <div className="flex">
        <Image src="/images/CONTACT_VERT_03.png" alt="Spacer" width={74} height={26} priority />

        <a href="http://nativesunstudios.com/Assets/Slices/images/GD_RESUME_STANDARD_REV.pdf" target="_blank" rel="noopener noreferrer" className="group relative block" style={{ width: 201, height: 26 }}>
          <Image
            src="/images/CONTACT_VERT_04_NATURAL.png"
            alt="Resume Link"
            width={201}
            height={26}
            className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-200"
            priority
          />
          <Image
            src="/images/CONTACT_VERT_04_OVER.png"
            alt="Resume Link Hover"
            width={201}
            height={26}
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            priority
          />
        </a>

        <Image src="/images/CONTACT_VERT_05.png" alt="Spacer" width={704} height={26} priority />
      </div>

      <Image src="/images/CONTACT_VERT_06.png" alt="Contact Bottom" width={979} height={190} priority />
    </div>
  );
}


