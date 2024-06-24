import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getHomeInfo = async (lang) => {
  try {
    // console.log("Fetching data with lang:", lang);
    const requestConfig = {
      method: "GET",
      url: "home", 
      headers: {
        "Accept-Language": lang,
      },
    };
    // console.log("Request config DATA:", requestConfig);

    const response = await instanceAxios(requestConfig);
    // console.log("Response received:", response);
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
    
      // console.error("Error response TEST:", error.response);
      // console.error("Error status:", error.response.status);
      // console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      // console.error("Error request:", error.request);
    } else {
      // console.error("Error message:", error.message);
    }
    // console.error("Error config:", error.config);
    return { data: {} };
  }
};
