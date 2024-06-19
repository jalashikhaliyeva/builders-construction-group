import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getSettingsInfo = async () => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "setting",
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
