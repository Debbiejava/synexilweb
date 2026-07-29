import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E8F3FF] text-synexil-dark border-t border-synexil-light shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide">SYNEXIL</h3>
            <p className="text-synexil-dark/70 mt-1 max-w-sm text-sm leading-relaxed">
              Empowering ethical innovation through secure, compliant, and intelligent technology.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6">

            {/* LinkedIn */}
            <Link href="https://www.linkedin.com" className="hover:text-synexil-blue transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-8.2c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
              </svg>
            </Link>

        

            {/* Email */}
            <Link href="mailto:support@synexil.com" className="hover:text-synexil-blue transition">
              <EnvelopeIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-synexil-light mt-4 pt-3 text-center text-synexil-dark/70 text-xs">
          © {new Date().getFullYear()} Synexil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
