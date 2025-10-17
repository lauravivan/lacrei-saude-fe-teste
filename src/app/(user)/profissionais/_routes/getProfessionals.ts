import getHeader from "@/utils/getHeader";

export async function getProfessionals() {
  try {
    const header = await getHeader();
    const isClient = typeof window !== "undefined";

    const url = isClient ? "/api/professionals" : `${header}/api/professionals`;

    const res = await fetch(url, { cache: "no-store" });
    return await res.json();
  } catch (e) {
    console.log("An error occurred when trying to search for professionals", e);
  }
}

export async function getProfessional(id: string) {
  try {
    const header = await getHeader();
    const isClient = typeof window !== "undefined";

    const url = isClient
      ? `/api/professionals/${id}`
      : `${header}/api/professionals/${id}`;

    const res = await fetch(url, { cache: "no-store" });

    return await res.json();
  } catch (e) {
    console.log("An error occurred when trying to search for professionals", e);
  }
}
