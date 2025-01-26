import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import HeadlessSlideOver from "./HeadlessSlideOver";
import Logo_INAkademia from "../../Assets/logo_2.png";
import { List, ListItem } from "@material-tailwind/react";
import { item_navbar } from "./items_nav";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import UsersProfile from "./UsersProfile";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-4 w-4 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function DrawerNavbar({ user }) {
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function openHandler() {
    setIsHeadlessOpen(true);
  }

  function closeHandler() {
    setIsHeadlessOpen(false);
  }

  return (
    <>
      <button
        variant="outline"
        size="icon"
        className="shrink-0 md:hidden"
        onClick={openHandler}
      >
        <HiMenu className="h-7 w-7" />
        <span className="sr-only">Toggle navigation menu</span>
      </button>
      <HeadlessSlideOver
        open={isHeadlessOpen}
        setOpen={setIsHeadlessOpen}
        title={
          <div className="flex flex-col gap-3 pt-10 px-5">
            <img src={Logo_INAkademia} className="w-[200px]" alt="" />
            <p className="mt-10 font-bold">Menu</p>
          </div>
        }
      >
        <div className="px-5">
          {item_navbar.map((el, i) => {
            return (
              <Accordion
                open={open === i + 1}
                icon={el.child.length !== 0 && <Icon id={i + 1} open={open} />}
              >
                <AccordionHeader
                  onClick={() => handleOpen(i + 1)}
                  className="text-md font-normal"
                >
                  {el.title}
                </AccordionHeader>
                {el.child.length !== 0 && (
                  <AccordionBody>
                    <List className="p-0">
                      {el.child.map((menu, i2) => {
                        return (
                          <ListItem key={i}>
                            <Link to={menu.href} className="w-full">
                              {menu.title}
                            </Link>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionBody>
                )}
              </Accordion>
            );
          })}

          <div className="mt-10">
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
      </HeadlessSlideOver>
    </>
  );
}
