import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getProjectsInfo = async () => {
  const response = await instanceAxios({ method: "GET", url: "projects" });
  return response;
};

