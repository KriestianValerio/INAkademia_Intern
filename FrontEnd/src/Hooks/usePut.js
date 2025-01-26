import { toast } from "react-toastify";
import { useState } from "react";
import { putApi, putApiForm } from "../utils/api";

// {
//     url: string;
//     method: "json" | "form-data";
//   }

export const usePut = (
  url,
  { method = "json", auth = true } = {
    method: "json",
    auth: true,
  },
) => {
  const [loading, setLoading] = useState(false);

  const updateData = async (data, params = {}) => {
    setLoading(true);
    try {
      let res;

      if (method === "json") {
        res = await putApi({
          url: url,
          auth: auth,
          data: data,
          params: params,
        });
      } else {
        res = await putApiForm({
          url: url,
          auth: auth,
          data: data,
          params: params,
        });
      }

      setLoading(false);

      if (res.status === 201) {
        return { data: res.data.data, status: true };
      } else {
        toast.error(`Message: ${res.data?.detail_message}`);
        return { data: null, status: false };
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error(
        `Message: ${
          err?.response?.data?.detail_message ||
          err?.response?.statusText ||
          "client error"
        }`,
      );
      return { data: null, status: false };
    }
  };

  return { updateData, loading };
};
