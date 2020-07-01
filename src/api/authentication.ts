import apiUtils from "./utils";

const authAPI: any = {
  login: (username: string, password: string): Promise<any> => {
    return apiUtils.fetch("/login", {
      method: "POST",
      requestParams: {
        username: username,
        password: password,
      },
    });
  },
  logout: (): Promise<any> => {
    return apiUtils.fetch("/logout", { isProtected: true, method: "POST" });
  },
};
export default authAPI;
