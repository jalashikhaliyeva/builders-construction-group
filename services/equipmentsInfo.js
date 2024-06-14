import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getEquipmentsInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "equipments",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return { equipments: [] };
  } catch (error) {
    console.error("Error fetching equipments info:", error);
    return { equipments: [] };
  }
};
