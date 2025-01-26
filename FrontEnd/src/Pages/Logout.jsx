import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { postApi } from "../utils/api";
import Spinners from "./Spinners";
import { useEffect } from "react";

const Logout = () => {
  const navigator = useNavigate();

  const logout = async () => {
    try {
      const get_user = Cookies.get("inakademia_user");
      Cookies.remove("inakademia_user", {
        path: "/",
        domain: ".rlstudio.my.id",
        secure: true,
      });

      if (get_user) {
        const user = JSON.parse(get_user);
        await postApi({
          url: "auth/logout",
          auth: true,
          data: {
            refresh_token: user?.refresh_token,
          },
        });

        document.location.href = "/signin";
      } else {
        document.location.href = "/signin";
      }
    } catch (Err) {
      document.location.href = "/signin";
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return <Spinners />;
};

export default Logout;
