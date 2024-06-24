import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getNewsDetail = async (slug, lang) => {
  // console.log(`Making request to blogs/${slug}`);

  const response = await instanceAxios({
    method: "GET",
    url: `blogs/${slug}`,
    headers: {
      "Accept-Language": lang,
    },
  });
  return response;
};
