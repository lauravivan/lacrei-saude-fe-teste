export async function getProfessionals() {
  try {
    const isClient = typeof window !== "undefined";
    const res = await fetch(
      isClient
        ? `/api/professionals`
        : "http://localhost:3000/api/professionals"
    );
    return await res.json();
  } catch (e) {
    console.log("An error occurred when trying to search for professionals", e);
  }
}

export async function getProfessional(id: string) {
  try {
    const isClient = typeof window !== "undefined";
    const res = await fetch(
      isClient
        ? `/api/professionals/${id}`
        : `http://localhost:3000/api/professionals/${id}`
    );
    return await res.json();
  } catch (e) {
    console.log("An error occurred when trying to search for professionals", e);
  }
}
