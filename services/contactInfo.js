import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getContactInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "contact",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return { contact: [] };
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return { contact: [] };
  }
};
