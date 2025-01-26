import React from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../Hooks/useScrollPosition";
import { useLocation } from "react-router-dom";

// Import Images and Logos
import Logo_INAkademia from "../../Assets/INAkademia-Logo.png";

// import icons
import { useGetUserInfo } from "../../Pages/middleware";
import { cn } from "../../utils/utils";
import { item_navbar } from "./items_nav";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import DrawerNavbar from "./DrawerNavbar";
import { Button } from "flowbite-react";
import UsersProfile from "./UsersProfile";

const Nav = (props) => {
  const [user] = useGetUserInfo();
  const location = useLocation();

  const scrollPosition = useScrollPosition();

  return (
    <>
      <header
        className={cn(
          "fixed z-10 bg-white w-full top-0 flex h-auto items-center gap-4 border-b px-4 md:px-6 py-4 transition-all duration-300 justify-between",
          scrollPosition > 0 &&
            "z-50 bg-slate-100 drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]",
        )}
      >
        <nav className="flex-col gap-6 text-lg font-medium  md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <img src={Logo_INAkademia} className="w-[40px] sm:w-[60px]" alt="logo" />
          </Link>
        </nav>
        <DrawerNavbar user={user} />
        <div className="md:flex hidden w-full items-center gap-10 ml-auto justify-end">
          {item_navbar.map((el, i) => {
            return (
              <Menu allowHover>
                <MenuHandler>
                  <div>
                    <Link
                      to="#"
                      className="text-muted-foreground hover:text-slate-500 transition-colors duration-500"
                    >
                      {el.title}
                    </Link>
                    {el.href === location.pathname ||
                    el.child.find((el2) => el2.href === location.pathname) ? (
                      <div className="w-full h-0.5 bg-black"></div>
                    ) : (
                      <></>
                    )}
                  </div>
                </MenuHandler>
                {el.child.length !== 0 && (
                  <MenuList className="z-[9999] text-start rounded-[20px] min-w-[200px]">
                    {el.child.map((menu, i2) => {
                      return (
                        <MenuItem
                          className={`py-3 hover:bg-slate-100 ${
                            menu.href === location.pathname
                              ? "bg-slate-100"
                              : ""
                          }`}
                          key={i2}
                        >
                          <Link to={menu.href}>{menu.title}</Link>
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                )}
              </Menu>
            );
          })}
          <div>
            {user ? (
              <>
                <UsersProfile user={user} />
              </>
            ) : (
              <Link to={"/signup"}>
                <Button className="font-semibold" color={"failure"}>
                  Sign Up
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
