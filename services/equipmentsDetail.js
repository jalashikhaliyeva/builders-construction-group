import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getEquipmentsInfoDetail = async (slug) => {
  console.log(`Making request to equipments/${slug}`);

  const response = await instanceAxios({
    method: "GET",
    url: `equipments/${slug}`,
  });
  return response;
};
