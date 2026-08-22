import Link from "next/link";

function FooterNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-xs font-semibold tracking-widest text-[#D1D5DB] hover:text-[#FFFFFF] transition-colors duration-300 uppercase"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] py-12 mt-12">
      <div className="native-container flex flex-col items-center justify-center gap-6">
        
        <nav className="flex flex-wrap justify-center items-center gap-8">
          <FooterNavLink href="/">Home</FooterNavLink>
          <FooterNavLink href="/portfolio">Portfolio</FooterNavLink>
          <FooterNavLink href="/services">Services</FooterNavLink>
          <FooterNavLink href="/about">About Us</FooterNavLink>
          <FooterNavLink href="/contact">Contact</FooterNavLink>
        </nav>

        <div className="flex items-center gap-8 mt-4">
          <div className="text-xs text-[#9CA3AF] tracking-widest">
            © {new Date().getFullYear()} NATIVE SUN STUDIOS
          </div>
          
          <a 
            href="http://nativesunstudios.com/Assets/Slices/images/GD_RESUME_STANDARD_REV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-widest text-[#FFFFFF] bg-[#CC0000] hover:bg-[#B30000] px-6 py-2 rounded-sm transition-all duration-300 uppercase"
          >
            Download Resume
          </a>
        </div>
        
      </div>
    </footer>
  );
}
