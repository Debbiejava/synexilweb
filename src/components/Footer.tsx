import Link from "next/link";
import {
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="w-full bg-synexil-blue text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">


          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide">SYNEXIL</h3>
            <p className="text-white/80 mt-2 max-w-sm">
              Empowering ethical innovation through secure, compliant, and intelligent technology.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-8">
            <Link
              href="https://www.linkedin.com"
              className="hover:text-synexil-aqua transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-8.2c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
              </svg>
            </Link>

            <Link
              href="https://github.com"
              className="hover:text-synexil-aqua transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.3.8-.6V3.4c0-.3.2-.7.8-.6C20.7 3.6 24 7.9 24 13c0 6.3-5.2 11.5-11.5 11.5S1 19.3 1 13C1 7.9 5.2 3.6 11.5 3.6c.6-.1.8.3.8.6v2.1c0 .3-.2.7-.8.6C5.7 6.7.5 11.9.5 18c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.3.8-.6V3.4c0-.3.2-.7.8-.6C20.7 3.6 24 7.9 24 13c0 6.3-5.2 11.5-11.5 11.5S1 19.3 1 13C1 7.9 5.2 3.6 11.5 3.6c.6-.1.8.3.8.6v2.1c0 .3-.2.7-.8.6z" />
              </svg>
            </Link>

            <Link
              href="mailto:contact@synexil.com"
              className="hover:text-synexil-aqua transition"
            >
              <EnvelopeIcon className="h-7 w-7" />
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/80 text-sm">
          © {new Date().getFullYear()} Synexil. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
