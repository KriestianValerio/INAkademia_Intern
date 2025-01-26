import { toast } from "react-toastify";
import { deleteApi } from "../utils/api";
import { useState } from "react";

export const useDelete = ({ url, auth = true }) => {
  const [loading, setLoading] = useState(false);

  const deleteData = async (id = "", params = {}) => {
    setLoading(true);
    try {
      const res = await deleteApi({
        url: url,
        headers: "",
        params: { id: id, ...params },
        auth: auth,
      });
      setLoading(false);

      if (res.status === 201) {
        return { status: true, data: res.data.data };
      } else {
        toast.error(`Message: ${res.data?.detail_message}`);
        return { status: false, data: null };
      }
    } catch (err) {
      setLoading(false);
      toast.error(
        `Message: ${
          err?.response?.data?.detail_message ||
          err?.response?.statusText ||
          "client error"
        }`,
      );
      return { status: false, data: null };
    }
  };

  return { deleteData, loading };
};
