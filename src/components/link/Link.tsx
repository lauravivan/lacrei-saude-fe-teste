import Link from "next/link";

type LinkType = {
  children: string;
  href: string;
};

export default function LinkComponent({ children, href }: LinkType) {
  return <Link href={href}>{children}</Link>;
}
