import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getNewsInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "blogs",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching news info:", error);
    return [];
  }
};
