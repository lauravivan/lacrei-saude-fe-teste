export async function getProfessionals() {
  try {
    const res = await fetch(`/api/professionals`);
    return await res.json();
  } catch (e) {
    console.log("An error occurred when trying to search for professionals", e);
  }
}
