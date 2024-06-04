import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getProjectsInfoDetail = async (slug) => {
  console.log(`Making request to projects/${slug}`);

  
  const response = await instanceAxios({
    method: "GET",
    url: `projects/${slug}`,
  });
  return response;
};
