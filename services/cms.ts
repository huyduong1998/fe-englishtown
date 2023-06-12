// import { getCms } from "../utils/axios_util";
// import { LmsUrls } from "../constants/lms_urls";
import request from "./request";

export const getLadingPage = (status: number | null = null) => {
  return request(`/api/landing-pages`, "", {
    params: {
      include: "page,forms,socialNetwork,formBuilder",
      "filter[status]": status ?? 1,
    },
  });
};

// export async function getLadingPage(status: number) {
//   const query = {
//     include: "page,forms,socialNetwork,formBuilder",
//     "filter[status]": status ?? 1,
//   };

//   const res = await getCms(LmsUrls.ladingPage, query, null);

//   return res.data.data.items;
// }
