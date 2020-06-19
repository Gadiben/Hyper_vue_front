import apiUtils from "./utils";

const mediaAPI: any = {
  fetchMedia: (id: number): Promise<any> => {
    return apiUtils.fetch("/medias/" + id, { method: "GET" });
  },
};
export default mediaAPI;
