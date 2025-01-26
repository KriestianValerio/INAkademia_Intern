import { useState } from "react";
import { postApi } from "../utils/api";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  const authentication = async (data) => {
    try {
      setLoading(true);
      setError({
        show: false,
        message: "",
      });

      const res = await postApi({
        url: "auth/login",
        data: data,
      });
      setLoading(false);

      if (res.status === 200) {
        return { status: res.status, response: true, data: res.data };
      } else {
        setError({
          show: true,
          message: res.data?.detail_message,
        });
        return { status: res.status, response: false, data: null };
      }
    } catch (err) {
      console.log(err.response);
      setLoading(false);
      setError({
        show: true,
        message:
          err?.response?.data?.detail_message ||
          err?.response?.statusText ||
          "client_error",
      });
      return {
        status: err?.response?.status,
        response: false,
        data:
          err?.response?.data?.detail_message ||
          err?.response?.statusText ||
          "client_error",
      };
    }
  };

  return { loading, error, authentication };
}
