import Link from "next/link";

export default function CTASection({
  title,
  text,
  buttonText,
  href,
}: {
  title: string;
  text: string;
  buttonText: string;
  href: string;
}) {
  return (
    <section className="py-20 bg-synexil-blue text-white text-center fade-in">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-white/90 max-w-xl mx-auto">{text}</p>

      <Link href={href}>
        <button className="btn-outline mt-8 hover-rise">
          {buttonText}
        </button>
      </Link>
    </section>
  );
}
