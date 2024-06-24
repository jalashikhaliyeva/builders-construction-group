import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getEquipmentsInfoDetail = async (slug, lang) => {
  // console.log(`Making request to equipments/${slug}`);

  const response = await instanceAxios({
    method: "GET",
    url: `equipments/${slug}`,
    headers: {
      "Accept-Language": lang,
    },
  });
  return response;
};
