import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getTeamInfo = async (lang) => {
  try {

    
    const response = await instanceAxios({
      method: "GET",
      url: "leadership-team",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching team info:", error);
    return [];
  }
};
