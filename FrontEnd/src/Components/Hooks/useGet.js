import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getApi } from "../../utils/api";

export default function useGet(
  url,
  {
    key_data,
    hit_first = false,
    combobox_schema,
    params,
    show_sonner_error = true,
    behavior_set_data = "default",
    auth = true,
  },
) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [combobox, setCombobox] = useState([]);
  const [error, setError] = useState(false);

  const set_combobox = (res) => {
    if (combobox_schema) {
      const data_combo = res.map((el, i) => {
        return {
          title: el[combobox_schema.label],
          value: el[combobox_schema.value],
        };
      });
      setCombobox(data_combo);
    }
  };

  const fetchData = async (params_get) => {
    setLoading(true);
    setError(false);
    try {
      const res = await getApi({
        url: url,
        params: params_get,
        auth: auth,
      });
      setLoading(false);

      if (res.status === 200) {
        console.log("DEBUG: ", res.data.data[key_data]);
        set_combobox(res.data.data[key_data]);

        if (behavior_set_data === "default") {
          setData(res.data.data[key_data]);
        }

        return { data: res.data.data[key_data], status: true };
      } else {
        if (show_sonner_error) {
          toast.error(`Message: ${res.data?.detail_message}`);
        }
        setError(true);
        return { data: null, status: false };
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
      if (show_sonner_error) {
        toast.error(
          `Message: ${
            err?.response?.data?.detail_message ||
            err?.response?.statusText ||
            "client error"
          }`,
        );
      }
      return { data: null, status: false };
    }
  };

  useEffect(() => {
    if (Array.isArray(data)) {
      if (data.length !== 0) {
        set_combobox(data);
      }
    }

    console.log("DATA", data);
  }, [data]);

  useEffect(() => {
    if (hit_first === true) {
      fetchData(params);
    }
  }, [hit_first]);

  return { data, loading, fetchData, combobox, setData, error, setError };
}
