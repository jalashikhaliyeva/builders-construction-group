import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getProductsInfo = async (lang) => {
  try {
    const response = await instanceAxios({
      method: "GET",
      url: "products",
      headers: {
        "Accept-Language": lang,
      },
    });
    if (response && response.data) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error("Error fetching products info:", error);
    return [];
  }
};
