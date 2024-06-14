import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getVideos = async () => {
  const response = await instanceAxios({ method: "GET", url: "video" });
  return response;
};
