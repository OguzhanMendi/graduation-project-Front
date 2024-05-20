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
import { useEffect, useState, useCallback } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { useSepet } from "@/context/SepetContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Header({ sepetAdet }) {
  const categories = [
    {
      id: 1,
      name: "Kız",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar"],
    },
    {
      id: 2,
      name: "Erkek",
      subcategories: ["Giyim", "Ayakkabı", "Aksesuar"],
    },
    {
      id: 3,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    {
      id: 4,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    {
      id: 5,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    {
      id: 6,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    {
      id: 7,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    {
      id: 8,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    {
      id: 9,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    {
      id: 10,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    {
      id: 11,
      name: "Çocuk",
      subcategories: ["Giyim", "Ayakkabı", "Oyuncak"],
    },
    // Diğer kategoriler...
  ];
  const [openCategory, setOpenCategory] = useState(null);

  ///
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const { toplamAdet, toplamAdetGuncelle } = useSepet();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const enterSearch = () => {
    router.push(`/sr?search=${search}`);
    localStorage.setItem("search", search);
  };

  const email = user?.user.email;
  const username = email ? email.split("@")[0] : "";

  const [search, setSearch] = useState("");

  useEffect(() => {
    let searchs = localStorage.getItem("search");
    setSearch(searchs);
    toplamAdetGuncelle();
  }, [toplamAdetGuncelle]);

  return (
    <>
      <div className="w-full  flex  justify-center gap-10 p-1  items-center ">
        <Link
          href="/"
          onClick={() => {
            localStorage.removeItem("search");
          }}
        >
          <div>
            <Image src={Logo} width={80} className="rounded-2xl" />
          </div>
        </Link>
        <div>
          <div className="bg-slate-50 flex items-center gap-2 p-1 text-gray-900 border-2 rounded-xl">
            <LocationOnIcon />
            <div className="flex flex-col">
              <span>Türkiye için</span>
              <span>Teslimat</span>
            </div>
          </div>
        </div>
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
              endAdornment: (
                <InputAdornment position="end" className="cursor-pointer">
                  <SearchIcon
                    onClick={() => {
                      router.push(`/sr?search=${search}`);
                      localStorage.setItem("search", search);
                    }}
                  />
                </InputAdornment>
              ),
            }}
            size="small"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                enterSearch();
              }
            }}
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
                <PersonOutlineIcon />
              </span>
              <span className="font-semibold">{username}</span>
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
                    router.push("/siparis");
                  }}
                >
                  <ListItemIcon>
                    <HistoryIcon fontSize="small" />{" "}
                    {/* Geçmiş siparişler simgesi */}
                  </ListItemIcon>
                  <ListItemText primary="Geçmiş Siparişlerim" />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <FavoriteBorderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Favorilerim" />
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

        <Link href="/Sepet">
          <div className="flex gap-1 items-center hover:text-blue-700 hover:cursor-pointer">
            <span
              className={
                toplamAdet > 0
                  ? "animate-pulse flex  gap-x-1 items-center font-semibold text-red-800"
                  : "flex gap-x-1 items-center "
              }
            >
              <span>
                <ShoppingCartIcon />
              </span>
              Sepetim{toplamAdet > 0 && ` (${toplamAdet})`}
            </span>
          </div>
        </Link>
      </div>

      <div>
        <Divider />
      </div>
    </>
  );
}
