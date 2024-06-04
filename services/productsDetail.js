import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getProductsInfoDetail = async (slug) => {
  console.log(`Making request to products/${slug}`);

  
  const response = await instanceAxios({
    method: "GET",
    url: `products/${slug}`,
  });
  return response;
};
