import PrimaryBadge from "../PrimaryBadge";

const BadgeDiversity = ({
  children,
  img,
}: {
  children: string;
  img: React.ReactElement<HTMLImageElement>;
}) => {
  return (
    <PrimaryBadge variant="Primary Badge/Default" img={img}>
      {children}
    </PrimaryBadge>
  );
};

export default BadgeDiversity;
