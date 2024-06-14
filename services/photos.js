import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getPhotos = async () => {
  const response = await instanceAxios({ method: "GET", url: "gallery" });
  return response;
};
