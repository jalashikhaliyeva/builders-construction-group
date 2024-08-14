// import { instanceAxios } from "@/shared/helpers/instanceAxios";

// export const getSettingsInfo = async (lang) => {
//   try {
//     const response = await instanceAxios({
//       method: "GET",
//       url: "setting",
//       headers: {
//         "Accept-Language": lang,
//       },
//     });
//     if (response && response.data) {
//       return response.data;
//     }
//     return { services: [] };
//   } catch (error) {
//     console.error("Error fetching settings info:", error);
//     return { services: [] };
//   }
// };



import { instanceAxios } from "@/shared/helpers/instanceAxios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getSettingsInfo = async (lang) => {
  try {
    // Add a delay of 3-4 seconds (3000-4000 ms)
    await delay(3500); // Using 3500 ms as an average of 3-4 seconds

    const response = await instanceAxios({
      method: "GET",
      url: "setting",
      headers: {
        "Accept-Language": lang,
      },
    });

    if (response && response.data) {
      return response.data;
    }
    return { services: [] };
  } catch (error) {
    console.error("Error fetching settings info:", error);
    return { services: [] };
  }
};
