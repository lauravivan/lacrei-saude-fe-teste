"use server";

import axios from "axios";

export async function getProfessionals() {
  const res = await axios({
    url: `${process.env.BACKEND_URL}/professionals`,
  });

  return res.data;
}
