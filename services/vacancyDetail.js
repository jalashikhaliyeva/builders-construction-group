import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getVacancyInfoDetail = async (slug, lang) => {
  console.log(`Making request to vacancy/${slug}`);

  const response = await instanceAxios({
    method: "GET",
    url: `vacancy/${slug}`,
    headers: {
      "Accept-Language": lang,
    },
  });
  return response;
};
