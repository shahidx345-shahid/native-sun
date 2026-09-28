import Image from "next/image";
import Link from "next/link";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-sm font-semibold tracking-wider text-[#1F2937] hover:text-[#CC0000] transition-colors duration-300 py-3 border-b-2 border-transparent hover:border-[#CC0000]"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="native-container relative z-40">
      {/* Top Spacer */}
      <div className="h-[31px] w-full" />

      {/* Logo Row */}
      <div className="flex justify-center mb-8">
        <Link href="/" className="block">
          <Image
            src="/images/HOME_LOGO_02.png"
            alt="Native Sun Studios Logo"
            width={157}
            height={214}
            priority
          />
        </Link>
      </div>

      {/* Navigation Row */}
      <nav className="flex justify-center items-center gap-12 py-2 uppercase">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
      
      {/* Spacer after nav to replace the padding from old layout if needed */}
      <div className="h-[40px] w-full" />
    </header>
  );
}
