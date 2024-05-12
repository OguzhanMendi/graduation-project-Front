import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "@/public/ozos.png";
import Link from "next/link";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  //
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const email = user?.user.email;
  const username = email ? email.split("@")[0] : "";

  return (
    <>
      <div className="w-full  flex  justify-center gap-10 p-1  items-center ">
        <Link href="/">
          <div>
            <Image src={Logo} width={80} className="rounded-2xl" />
          </div>
        </Link>
        <div>
          <TextField
            id="outlined-basic"
            placeholder="Ara..."
            sx={{
              width: "600px",
              borderRadius: "500px",
            }}
            InputProps={{
              style: {
                borderRadius: "1000px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </div>
        {user?.user?.email ? (
          <div>
            <div
              className="flex gap-1 items-center hover:text-blue-700 hover:cursor-pointer"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <span>
                <PersonIcon />
              </span>
              <span>{username}</span>
            </div>
            <div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Ayarlar" />
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch({
                      type: "LOGOUT",
                    });
                    Cookie.remove("user_token");
                  }}
                >
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Çıkış Yap" />
                </MenuItem>
              </Menu>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <div className="flex gap-1 items-center hover:text-blue-700 hover:cursor-pointer">
              <span>
                <PersonIcon />
              </span>
              <span>Giris Yap</span>
            </div>
          </Link>
        )}

        <div className="flex gap-1 items-center hover:text-blue-700 hover:cursor-pointer">
          <span>
            <ShoppingBasketIcon />
          </span>
          <span>Sepetim</span>
        </div>
      </div>
    </>
  );
}
