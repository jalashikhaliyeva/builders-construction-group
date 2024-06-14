import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://bcgadmin.markup.az/api/",
  headers: {
    'Accept': 'application/json, text/plain, */*',
  },
});

// export const getAboutInfo = async () => {
//     return await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about`);
//   };
