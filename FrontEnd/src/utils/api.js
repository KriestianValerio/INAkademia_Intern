import axios from "./axios";
import Cookies from "js-cookie";

export const getApi = async ({ url, params = {}, auth = false }) => {
  return new Promise((res, rej) => {
    let headers = {
      Accept: "application/json",
    };

    if (auth) {
      const user = Cookies.get("inakademia_user");
      if (user !== undefined) {
        const user_data = JSON.parse(user);

        headers = {
          ...headers,
          Authorization: "Bearer " + user_data?.access_token,
        };
      }
    }

    axios({
      url: url,
      method: "GET",
      headers: headers,
      params: params,
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const postApi = async ({ url, data = {}, auth = false }) => {
  return new Promise((res, rej) => {
    let headers = {
      Accept: "application/json",
    };

    if (auth) {
      const user = Cookies.get("inakademia_user");
      if (user !== undefined) {
        const user_data = JSON.parse(user);

        headers = {
          ...headers,
          Authorization: "Bearer " + user_data?.access_token,
        };
      }
    }

    axios({
      url: url,
      method: "POST",
      headers: headers,
      data: data,
      withCredentials: true,
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const postApiForm = async ({ url, auth = false, data = {} }) => {
  return new Promise((res, rej) => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    };

    if (auth) {
      const user = Cookies.get("inakademia_user");
      if (user !== undefined) {
        const user_data = JSON.parse(user);

        headers = {
          ...headers,
          Authorization: "Bearer " + user_data?.access_token,
        };
      }
    }

    axios({
      url: url,
      method: "POST",
      headers: headers,
      data: data,
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const putApi = async ({ url, auth = false, data = {}, params = {} }) => {
  return new Promise((res, rej) => {
    let headers = {
      Accept: "application/json",
    };

    if (auth) {
      const user = Cookies.get("inakademia_user");
      if (user !== undefined) {
        const user_data = JSON.parse(user);

        headers = {
          ...headers,
          Authorization: "Bearer " + user_data?.access_token,
        };
      }
    }

    axios({
      url: url,
      method: "PUT",
      headers: headers,
      data: data,
      params: params,
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const putApiForm = async ({
  url,
  auth = false,
  data = {},
  params = {},
}) => {
  return new Promise((res, rej) => {
    let headers = {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    };

    if (auth) {
      const user = Cookies.get("inakademia_user");
      if (user !== undefined) {
        const user_data = JSON.parse(user);

        headers = {
          ...headers,
          Authorization: "Bearer " + user_data?.access_token,
        };
      }
    }

    axios({
      url: url,
      method: "PUT",
      headers: headers,
      data: data,
      params: params,
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
};

export const deleteApi = async ({ url, auth = false, params = {} }) => {
  return new Promise((res, rej) => {
    let headers = {
      Accept: "application/json",
    };

    if (auth) {
      const user = Cookies.get("inakademia_user");
      if (user !== undefined) {
        const user_data = JSON.parse(user);

        headers = {
          ...headers,
          Authorization: "Bearer " + user_data?.access_token,
        };
      }
    }

    axios({
      url: url,
      method: "DELETE",
      headers: headers,
      params: params,
    })
      .then((result) => {
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
};
