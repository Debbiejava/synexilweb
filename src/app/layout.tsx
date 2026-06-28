import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata = {
  title: "Synexil",
  description: "Empowering Ethical Innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* FULL-WIDTH NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="min-h-screen">
          <Container>
  <div className="page-transition">
    {children}
  </div>
</Container>

        </main>

        {/* FULL-WIDTH FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
