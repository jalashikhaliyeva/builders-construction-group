import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getProductsInfoDetail = async (slug, lang) => {
  console.log(`Making request to products/${slug}`);

  const response = await instanceAxios({
    method: "GET",
    url: `products/${slug}`,
    headers: {
      "Accept-Language": lang,
    },
  });
  return response;
};
