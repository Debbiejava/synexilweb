"use client";


export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          Contact Us
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto text-center">
          Whether you’re looking for security expertise, governance support, training,
          or custom product development, Synexil is here to help.
          Reach out and we’ll get back to you promptly.
        </p>

        {/* GRID LAYOUT */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* CONTACT FORM */}
          <div className="p-8 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-blue-700">Send Us a Message</h2>

            <form
              className="mt-8 space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const formData = new FormData(form);

                const body = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                };

                const res = await fetch("/api/contact", {
                  method: "POST",
                  body: JSON.stringify(body),
                });

                if (res.ok) {
                  alert("Message sent successfully!");
                  form.reset();
                } else {
                  alert("Something went wrong. Please try again.");
                }
              }}
            >

              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* CONTACT DETAILS */}
          <div className="p-8 bg-white rounded-xl">
            <h2 className="text-2xl font-semibold text-blue-700">Get in Touch</h2>

            <p className="mt-4 text-gray-700">
              We’re here to support your organisation’s journey toward secure,
              compliant, and ethical digital transformation.
            </p>

            <div className="mt-10 space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p>contact@synexil.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p>+44 (0) 0000 000000</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p>United Kingdom</p>
              </div>

            </div>

            <div className="mt-12">
              <a
                href="/services"
                className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition"
              >
                Explore Our Services
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
