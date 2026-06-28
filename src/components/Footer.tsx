export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white">Synexil</h3>
          <p className="mt-4 text-gray-400">
            Ethical innovation. Secure cloud transformation. Human‑centred design.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-3">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-3">
            <li><a href="/services/purview" className="hover:text-white transition">Microsoft Purview</a></li>
            <li><a href="/services/defender" className="hover:text-white transition">Microsoft Defender</a></li>
            <li><a href="/services/m365-management" className="hover:text-white transition">M365 Management</a></li>
            <li><a href="/services/training" className="hover:text-white transition">Training</a></li>
            <li><a href="/services/product-development" className="hover:text-white transition">Product Development</a></li>
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <h4 className="text-lg font-semibold text-white">Connect</h4>
          <div className="mt-4 flex space-x-6">

            {/* LinkedIn */}
            <a href="#" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a href="#" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.9 2.8 1.9 1.1 0 1.9-.4 2.3-.8-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Synexil. All rights reserved.
      </div>
    </footer>
  );
}
