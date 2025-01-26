import { Avatar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { limitCharacters } from "../../utils/utils";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

export default function UsersProfile({ user, className }) {
  return (
    <Menu allowHover>
      <MenuHandler>
        <div className={`flex gap-4 cursor-pointer ${className || ""}`}>
          <Avatar rounded img={"/assets/images/user.webp"} />
          <p className="self-center">
            {limitCharacters(
              `${user?.namaDepan || ""} ${user?.namaBelakang}`,
              18,
            )}
          </p>
        </div>
      </MenuHandler>
      <MenuList className="z-[9999999] min-w-[200px] rounded-[20px]">
        <MenuItem className="py-3 hover:bg-slate-100">
          <Link to={"/logout"} className="w-full">
            Sign out
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
