import {getCms} from "../utils/axios_util";
import {LmsUrls} from "../constants/lms_urls";

export async function getLadingPage(status){
    const query = {
        "include" : "page,forms,socialNetwork,formBuilder",
        "filter[status]" : status ?? 1,
    };

    const res = await getCms(LmsUrls.ladingPage,query,null);

    return res.data.data.items;
}