import Link from 'next/link';
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-container">
        {/* Logo */}
        <div className="logo-wrapper">
          <div className="logo">
            <Image 
              src="/images/swiss-ai-callcenter.svg" 
              alt="Swiss AI Callcenter Logo"
              width={180}
              height={40}
            />  
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link href="#ai-receptionist" className="nav-link">
            AI Receptionist
          </Link>
          <Link href="#ai-call-center" className="nav-link">
            AI Call Center
          </Link>
          <Link href="#ai-sales-agent" className="nav-link">
            AI Sales Agent
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="nav-actions">
          <Link href="#contact" className="nav-button">
            Contact Us
          </Link>
          <Link href="#login" className="nav-button">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
