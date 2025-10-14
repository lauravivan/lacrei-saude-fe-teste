import PrimaryBadge from "../primary-badge/PrimaryBadge";

const BadgeDiversity = ({
  children,
  img,
}: {
  children: string;
  img: React.ReactElement<HTMLImageElement>;
}) => {
  return (
    <PrimaryBadge type="default" style="solid" img={img}>
      {children}
    </PrimaryBadge>
  );
};

export default BadgeDiversity;
