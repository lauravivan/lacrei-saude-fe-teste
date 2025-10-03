import Link, { LinkTypes } from "./Link";

type LinkTextType = {
  type: LinkTypes;
  href: string;
  children: string;
};

export default function LinkText({ href, type, children }: LinkTextType) {
  return (
    <Link type={type} href={href}>
      {children}
    </Link>
  );
}
