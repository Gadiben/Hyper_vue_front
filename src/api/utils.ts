import config from "@/config";
import store from "../store";

export interface Request {
  method: string;
  body: any;
  headers: any;
  requestParams: any;
  isProtected: boolean;
}

const objectToQueryParams = function(object: any) {
  return (
    "?" +
    Object.keys(object)
      .map((k) => k + "=" + object[k])
      .join("&")
  );
};
const apiUtils: any = {
  fetch: (url: string, request: Request): Promise<any> => {
    const queryParams = request.requestParams
      ? objectToQueryParams(request.requestParams)
      : "";
    const authToken = request.isProtected
      ? { Authorization: store.state.authModule.token }
      : null;
    return new Promise((resolve, reject) => {
      return fetch(config.APIURL + url + queryParams, {
        method: request.method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          ...authToken,
        },
        body: request.body,
      }).then(
        (response) => {
          if (response.ok) {
            resolve(response.json());
          } else {
            reject(new Error("error"));
          }
        },
        (error) => {
          reject(new Error(error.message));
        }
      );
    });
  },
};
export default apiUtils;
