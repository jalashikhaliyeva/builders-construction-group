export const ROUTER = {
  HOME: "/",
  ABOUT: "/about",
  RESOURCE: "/resource",
  PRODUCTS: "/products",
  PRODUCTS_DETAILS: "/products/[id]",
  SERVICES: "/services",
  SERVICES_DETAILS: "/services/[id]",
  CORPORATIVE: "/corporative",
  PROJECTS: "/projects",
  PROJECTS_DETAILS: "/projects/[id]",
  MEDIA: "media",
  CONTACT: "/contact",
  NEWS: "/news",
  NEWS_DETAILS: "/news/[id]",
  // NEWS_DETAILS: "/news-detail",
  PHOTOS: "/photos",
  PHOTO_DETAILS: "/photos/[id]",
  VIDEOS: "/videos",
  EQUIPMENTS: "/equipments",
  EQUIPMENTS_DETAILS: "/equipments/[id]",
  TEAM: "/team",
  TEAM_DETAILS: "/team/[id]",
  VACANCY: "/vacancy",
  VACANCY_DETAILS: "/vacancy/[id]",
  PRODUCTS: "/products",
};

//ANA SƏHİFƏ = HOME
//ABOUT = HAQQIMIZDA
//PRODUCTS = MƏHSULLAR
//SERVICES = XİDMƏTLƏR
//PROJECTS = LAYİHƏLƏR
//CORPORATIVE = KORPARATİV
//NEWS = XƏBƏRLƏR
//PHOTOS = FOTO
//VIDEOS = VIDEO
//CONTACT = ƏLAQƏ
// EQUIPMENTS = AVADANLIQLARIMIZconst isClient = typeof window === "object";

// const isClient = typeof window === "object";
// const getLanguage = () => {
//   if (isClient) {
//     return localStorage.getItem("lang") || "az"; // default to 'az' if no language is set
//   }
//   return "az"; // default language for server-side rendering
// };

// const ROUTES = {
//   az: {
//     HOME: "/",
//     ABOUT: "/about",
//     RESOURCE: "/resource",
//     PRODUCTS: "/products",
//     PRODUCTS_DETAILS: "/products/[id]",
//     SERVICES: "/services",
//     CORPORATIVE: "/corporative",
//     PROJECTS: "/projects",
//     PROJECTS_DETAILS: "/projects/[id]",
//     MEDIA: "/media",
//     CONTACT: "/contact",
//     NEWS: "/news",
//     NEWS_DETAILS: "/news/[id]",
//     PHOTOS: "/photos",
//     PHOTO_DETAILS: "/photos/[id]",
//     VIDEOS: "/videos",
//     EQUIPMENTS: "/equipments",
//     EQUIPMENTS_DETAILS: "/equipments/[id]",
//     TEAM: "/team",
//     TEAM_DETAILS: "/team/[id]",
//     VACANCY: "/vacancy",
//     VACANCY_DETAILS: "/vacancy/[id]",
//   },
//   en: {
//     HOME: "/en",
//     ABOUT: "/en/about",
//     RESOURCE: "/en/resource",
//     PRODUCTS: "/en/products",
//     PRODUCTS_DETAILS: "/en/products/[id]",
//     SERVICES: "/en/services",
//     CORPORATIVE: "/en/corporative",
//     PROJECTS: "/en/projects",
//     PROJECTS_DETAILS: "/en/projects/[id]",
//     MEDIA: "/en/media",
//     CONTACT: "/en/contact",
//     NEWS: "/en/news",
//     NEWS_DETAILS: "/en/news/[id]",
//     PHOTOS: "/en/photos",
//     PHOTO_DETAILS: "/en/photos/[id]",
//     VIDEOS: "/en/videos",
//     EQUIPMENTS: "/en/equipments",
//     EQUIPMENTS_DETAILS: "/en/equipments/[id]",
//     TEAM: "/en/team",
//     TEAM_DETAILS: "/en/team/[id]",
//     VACANCY: "/en/vacancy",
//     VACANCY_DETAILS: "/en/vacancy/[id]",
//   },
//   ru: {
//     HOME: "/ru",
//     ABOUT: "/ru/about",
//     RESOURCE: "/ru/resource",
//     PRODUCTS: "/ru/products",
//     PRODUCTS_DETAILS: "/ru/products/[id]",
//     SERVICES: "/ru/services",
//     CORPORATIVE: "/ru/corporative",
//     PROJECTS: "/ru/projects",
//     PROJECTS_DETAILS: "/ru/projects/[id]",
//     MEDIA: "/ru/media",
//     CONTACT: "/ru/contact",
//     NEWS: "/ru/news",
//     NEWS_DETAILS: "/ru/news/[id]",
//     PHOTOS: "/ru/photos",
//     PHOTO_DETAILS: "/ru/photos/[id]",
//     VIDEOS: "/ru/videos",
//     EQUIPMENTS: "/ru/equipments",
//     EQUIPMENTS_DETAILS: "/ru/equipments/[id]",
//     TEAM: "/ru/team",
//     TEAM_DETAILS: "/ru/team/[id]",
//     VACANCY: "/ru/vacancy",
//     VACANCY_DETAILS: "/ru/vacancy/[id]",
//   },
// };

// let ROUTER = ROUTES[getLanguage()];

// const updateRouter = () => {
//   const language = getLanguage();
//   if (ROUTES[language]) {
//     ROUTER = ROUTES[language];
//   } else {
//     console.error(`Locale ${language} is not defined in ROUTER`);
//   }
//   console.log("Router updated:", ROUTER); // Add this line for debugging
// };

// if (isClient) {
//   window.addEventListener("storage", () => {
//     updateRouter();
//   });
// }

// export { ROUTER, updateRouter };
