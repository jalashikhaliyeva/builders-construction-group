import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getServicesDetail = async (slug, lang) => {
  // console.log(`Making request to blogs/${slug}`);

  const response = await instanceAxios({
    method: "GET",
    url: `services/${slug}`,
    headers: {
      "Accept-Language": lang,
    },
  });
  return response;
};
