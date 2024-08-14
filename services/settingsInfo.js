import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getSettingsInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "setting",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return { services: [] };
  } catch (error) {
    console.error("Error fetching settings info:", error);
    return { services: [] };
  }
};
