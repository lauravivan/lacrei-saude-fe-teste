import SkipLinkStyles from "./SkipLink.styles";

const SkipLink = ({
  children,
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <SkipLinkStyles>{children}</SkipLinkStyles>;
};

export default SkipLink;
