export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const base = variant === "primary" ? "btn-primary" : "btn-outline";

  return <button className={`${base} hover-rise`}>{children}</button>;
}
