import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Services Section Marker / Header */}
      <div>
        <Image src="/images/HOME_11.png" alt="Services Separator" width={979} height={93} priority />
      </div>

      <div className="flex">
        {/* Looking at the widths of the services boxes and spacers from the PSD slicing we know:
            HOME_SERVICES-BOX1_29 is 223px
            HOME_SERVICES-BOX2_30 is 223px
            HOME_SERVICES-BOX3_31 is 223px
            Spacers between: (979 - 3*223) / 4 = 310 / 4 => 91, 65, 63, 91 (approx based on earlier guesses) */}
        <div style={{ width: 91, height: 346 }} />
        <Image src="/images/HOME_SERVICES-BOX1_29.png" alt="Service 1" width={223} height={346} priority />
        <div style={{ width: 65, height: 346 }} />
        <Image src="/images/HOME_SERVICES-BOX2_30.png" alt="Service 2" width={223} height={346} priority />
        <div style={{ width: 63, height: 346 }} />
        <Image src="/images/HOME_SERVICES-BOX3_31.png" alt="Service 3" width={223} height={346} priority />
        <div style={{ width: 91, height: 346 }} />
      </div>
      
      {/* Adding bottom padding so it matches general spacing */}
      <div style={{ height: 100 }} />
    </div>
  );
}

