import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getProjectsInfoDetail = async (slug, lang) => {
  // console.log(`Making request to projects/${slug}`);

  const response = await instanceAxios({
    method: "GET",
    url: `projects/${slug}`,
    headers: {
      "Accept-Language": lang,
    },
  });
  return response;
};
