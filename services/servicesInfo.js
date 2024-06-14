import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getServicesInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "services",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return { services: [] };
  } catch (error) {
    console.error("Error fetching services info:", error);
    return { services: [] };
  }
};
