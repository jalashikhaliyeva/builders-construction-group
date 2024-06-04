import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getAboutInfo = async () => {
  const response = await instanceAxios({ method: "GET", url: "about" });
  return response;
};

