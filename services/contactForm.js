import { instanceAxios } from "@/shared/helpers/instanceAxios";

export const postContactForm = async (formData) => {
  try {
    const response = await instanceAxios.post('/contactform', formData);
    return response.data;
  } catch (error) {
    console.error("Error posting contact form:", error);
    throw error;
  }
};

// export const postContactForm = async () => {
//   const response = await instanceAxios({ method: "POST", url: "contactform" });
//   return response;
// };
