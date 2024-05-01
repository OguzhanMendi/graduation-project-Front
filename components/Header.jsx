import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "@/public/ozos.png";

export default function Header() {
  return (
    <>
      <div className="w-full  flex  justify-center gap-10 p-1  items-center ">
        <div>
          <Image src={Logo} width={80} className="rounded-2xl" />
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
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </div>
        <div className="flex gap-1 items-center hover:text-blue-700 hover:cursor-pointer">
          <span>
            <PersonIcon />
          </span>
          <span>Giris Yap</span>
        </div>

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
