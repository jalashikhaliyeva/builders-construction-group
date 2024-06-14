import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getAboutInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "about",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return { certificates: [] }; 
  } catch (error) {
    console.error("Error fetching about info:", error);
    return { certificates: [] };
  }
};
