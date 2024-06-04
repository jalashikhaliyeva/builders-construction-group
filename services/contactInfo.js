import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getContactInfo = async () => {
  const response = await instanceAxios({ method: "GET", url: "contact" });
  return response;
};
