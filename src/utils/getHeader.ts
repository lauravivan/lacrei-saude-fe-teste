import { headers } from "next/headers";

const getHeader = async () => {
  const head = await headers();
  return `${head.get("x-forwarded-proto") ?? "https"}://${head.get("host")}`;
};
    
export default getHeader;
