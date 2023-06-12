import { LmsUrls } from "../constants/lms_urls";
export class AppUtils {
  static replaceNewDoMain(url: string | null) {
    if (url == null) return null;
    if (url.includes(LmsUrls.storage + LmsUrls.splat)) {
      let index = url.indexOf(LmsUrls.storage + LmsUrls.splat);
      return (url = LmsUrls.oldUrl + url.substring(index, url.length));
    }
    if (url.includes(LmsUrls.public + LmsUrls.splat)) {
      let index = url.indexOf(LmsUrls.public + LmsUrls.splat);

      return LmsUrls.newUrl + url.substring(index, url.length);
    }
    return url;
  }
}
