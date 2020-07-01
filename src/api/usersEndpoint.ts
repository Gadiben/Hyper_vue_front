import apiUtils from "./utils";

const userAPI: any = {
  fetchUser: (id: number): Promise<any> => {
    return apiUtils.fetch("/users/" + id, { method: "GET" });
  },
};
export default userAPI;
