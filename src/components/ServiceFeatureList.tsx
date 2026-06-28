import useReveal from "@/hooks/useReveal";

export default function ServiceFeatureList({ features }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => {
          const ref = useReveal();
          return (
            <div
              key={index}
              ref={ref}
              className="reveal card hover-rise"
            >
              <p className="text-synexil-dark font-medium">{feature}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
