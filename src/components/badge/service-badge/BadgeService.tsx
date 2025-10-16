import PrimaryBadge from "../PrimaryBadge";

const BadgeService = ({
  children,
}: {
  children: "Convênio" | "Particular";
}) => {
  return (
    <PrimaryBadge variant="Primary Badge/Success">{children}</PrimaryBadge>
  );
};

export default BadgeService;
