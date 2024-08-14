import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getHomeInfo = async (lang) => {
  try {
    console.log("Fetching data with lang:", lang);
    const requestConfig = {
      method: "GET",
      url: "home",
      headers: {
        "Accept-Language": lang,
      },
    };

    const response = await instanceAxios(requestConfig);

    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.warn("Rate limit exceeded. Retrying...");
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait before retrying
      return getHomeInfo(lang);
    } else {
      console.error("Error fetching home info:", error);
      return { data: {} };
    }
  }
};
