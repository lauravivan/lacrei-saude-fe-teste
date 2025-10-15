import PrimaryBadge from "../PrimaryBadge";

const BadgeService = ({ text }: { text: "Convênio" | "Particular" }) => {
  return <PrimaryBadge variant="Primary Badge/Success">{text}</PrimaryBadge>;
};

export default BadgeService;
