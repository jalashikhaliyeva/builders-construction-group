import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getVacancyInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "vacancy",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching vacancy info:", error);
    return [];
  }
};
