"use server";

import axios from "axios";

export async function getProfessionals() {
  try {
    const res = await axios({
      url: `${process.env.BACKEND_URL}/professionals`,
    });

    return res.data;
  } catch (e) {
    console.log("deu ruim", e);
  }
}
