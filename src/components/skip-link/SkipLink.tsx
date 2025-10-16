import SkipLinkStyles from "./SkipLink.styles";

interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const SkipLink = ({ children }: SkipLinkProps) => {
  return <SkipLinkStyles>{children}</SkipLinkStyles>;
};

export default SkipLink;
