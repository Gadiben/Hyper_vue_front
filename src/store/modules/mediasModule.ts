import { Module } from "vuex";
import mediaAPI from "@/api/mediaEndpoint";

const mediaModule: Module<any, any> = {
  state: () => ({
    count: 0,
    media: null,
  }),
  mutations: {
    SAVE_MEDIA(state, media) {
      state.media = media;
    },
  },
  actions: {
    fetchMedia({ commit }, id: number) {
      mediaAPI
        .fetchMedia(id)
        .then((media: any) => {
          commit("SAVE_MEDIA", media);
          console.log(media);
        })
        .catch((err: any) => console.log(err));
    },
  },
};
export default mediaModule;
