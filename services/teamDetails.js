import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const getTeamInfoDetail = async (slug, lang) => {
  console.log(`Making request to team/${slug}`);

  const response = await instanceAxios({
    method: "GET",
    url: `leadership-team/${slug}`,
    headers: {
      "Accept-Language": lang,
    },
  });
  return response;
};
