import axios from "axios";
import { LmsUrls } from "../constants/lms_urls";
import { errorHandle } from "../core/error_handle";
import { parse, stringify } from "qs";

const _instance = axios.create({
  baseURL: LmsUrls.baseUrl,
  timeout: 15000,
  // paramsSerializer: {
  //   encode: parse,
  //   serialize: stringify,
  // },
});

const _instanceCms = axios.create({
  baseURL: LmsUrls.cmsBaseUrl,
  timeout: 15000,
  // paramsSerializer: {
  //   encode: parse,
  //   serialize: stringify,
  // },
});

export async function post(
  cUrls: string,
  body: any,
  acessToken: string | null
) {
  try {
    let headers = {};

    if (acessToken != null) {
      headers = {
        Authorization: "Bearer " + acessToken,
      };
    }
    return await _instance.post(cUrls, body, {
      headers: headers,
    });
  } catch (e) {
    errorHandle(e);
  }
}

export async function get(
  cUrls: string,
  param: any,
  acessToken: string | null
) {
  try {
    let headers = {};

    if (acessToken != null) {
      headers = {
        Authorization: "Bearer " + acessToken,
      };
    }

    return await _instance.get(cUrls, {
      params: param,
      headers: headers,
    });
  } catch (e) {
    errorHandle(e);
  }
}

export async function postCms(
  cUrls: string,
  body: any,
  acessToken: string | null
) {
  try {
    let headers = {};

    if (acessToken != null) {
      headers = {
        Authorization: "Bearer " + acessToken,
      };
    }
    return await _instanceCms.post(cUrls, body, {
      headers: headers,
    });
  } catch (e) {
    errorHandle(e);
  }
}

export async function getCms(
  cUrls: string,
  param: any,
  acessToken: string | null
) {
  try {
    let headers = {};

    if (acessToken != null) {
      headers = {
        Authorization: "Bearer " + acessToken,
        'Content-Type': 'text/javascript'
      };
    }

    return await _instanceCms.get(cUrls, {
      params: param,
      headers: headers,
    });
  } catch (e) {
    errorHandle(e);
  }
}
