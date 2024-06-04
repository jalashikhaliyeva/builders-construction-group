import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getProductsInfo = async () => {
  const response = await instanceAxios({ method: "GET", url: "products" });
  return response;
};
