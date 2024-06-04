import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getEquipmentsInfo = async () => {
  const response = await instanceAxios({ method: "GET", url: "equipments" });
  return response;
};
