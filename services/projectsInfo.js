import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getProjectsInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "projects",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching projects info:", error);
    return [];
  }
};
