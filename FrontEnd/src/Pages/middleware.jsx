import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { atom, useAtom } from "jotai";
import { getApi } from "../utils/api";
import Spinners from "./Spinners";

const configUserDetail = atom(null);

export function useGetUserInfo() {
  return useAtom(configUserDetail);
}

const AuthMiddleware = (props) => {
  const [loading, setLoading] = useState(true);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useGetUserInfo();

  const getDetailUsers = async () => {
    try {
      const user_cookie = Cookies.get("inakademia_user");
      console.log("location", location.pathname);

      if (user_cookie !== undefined) {
        const res = await getApi({
          url: "user/detail",
          params: {},
          auth: true,
        });

        if (res.status === 200) {
          const userData = res.data.data;
          setUser(userData);
          setAccess(true);

          console.log(userData.role);

          switch (userData.role) {
            case "admin":
              if (!location.pathname.startsWith("/admin")) {
                navigate("/admin");
              }
              break;
            case "student":
              if (!location.pathname.startsWith("/student")) {
                navigate("/student");
              }
              break;
            case "tutor":
              if (!location.pathname.startsWith("/tutor")) {
                navigate("/tutor/JadwalkanSesi");
              }
              break;
            default:
              navigate("/");
              break;
          }
        } else {
          setAccess(false);
        }
      } else {
        setAccess(false);
      }
    } catch (err) {
      console.log("ERROR", err);
      setAccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailUsers();
  }, []);

  if (loading) {
    return <Spinners />;
  }

  if (!access) {
    return (
      <Navigate
        to={`/signin?to=${location.pathname}`}
        state={{ from: location }}
      />
    );
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default AuthMiddleware;
