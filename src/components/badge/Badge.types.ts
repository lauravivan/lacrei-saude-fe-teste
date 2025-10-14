export type BadgeVariant = "success" | "default" | "error" | "info";

export interface BadgeType {
  type: BadgeVariant;
  style: "solid" | "outline";
  img?: React.ReactElement<HTMLImageElement> | null;
  children: string;
}
