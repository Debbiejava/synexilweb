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

            {/* GitHub */}
            <Link href="https://github.com" className="hover:text-synexil-blue transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.19.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12Z" clipRule="evenodd" />
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
