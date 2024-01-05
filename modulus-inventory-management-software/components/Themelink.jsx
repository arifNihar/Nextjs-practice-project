import Link from "next/link";

export default function Themelink({ className, href, title, icon }) {
  const Icon = icon;
  return (
    <Link
      href={href}
      className={`focus:rign-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-3 text-center flex items-center ${className}`}
    >
      {title}{" "}
    </Link>
  );
}
