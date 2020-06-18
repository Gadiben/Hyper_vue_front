const userAPI: any = {
  fetchUser: (id: number): Promise<any> => {
    return new Promise((resolve, reject) => {
      return fetch("http://127.0.0.1:8080/users/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
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
export default userAPI;
