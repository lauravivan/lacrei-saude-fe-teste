import { BadgeVariant } from "../Badge.types";

const getColor = (type: BadgeVariant) => {
  const success = type === "success" && "var(--green-10)";
  const defaultType = type === "default" && "var(--gray-20)";
  const errorType = type === "error" && "var(--red-20)";
  const info = type === "info" && "var(--blue-10)";

  return success || defaultType || errorType || info;
};

export default getColor;