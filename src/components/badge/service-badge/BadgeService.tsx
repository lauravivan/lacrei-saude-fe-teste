import PrimaryBadge from "../primary-badge/PrimaryBadge";

const BadgeService = ({ text }: { text: "Convênio" | "Particular" }) => {
  return (
    <PrimaryBadge type="success" style="solid">
      {text}
    </PrimaryBadge>
  );
};

export default BadgeService;
