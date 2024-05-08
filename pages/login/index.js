import React, { useState } from "react";
import facebookLogo from "@/public/facebook.png";
import googleLogo from "@/public/google.png";
import Image from "next/image";
import { TextField, Button, InputAdornment, Divider } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Header from "@/components/Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="flex flex-col  justify-center gap-3 ">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div class="flex justify-center">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="Login tabs"
          className="text-white"
        >
          <Tab label="Giriş Yap" className=" text-black" />
          <Tab label="Üye Ol" className=" text-black" />
        </Tabs>
      </div>

      {activeTab === 0 ? (
        <div className="flex justify-center items-center md:gap-10 box-border flex-grow">
          <div className="w-full flex flex-col justify-center items-center gap-6 md:ml-0 ml-7">
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold md:text-4xl text-2xl">
                Hoş Geldiniz
              </span>
              <p className="text-lg">
                Sizi tekrar aramızda görmekten mutluluk duyuyoruz
              </p>
            </div>

            <TextField
              id="filled-basic"
              variant="outlined"
              placeholder="Username"
              sx={{
                width: "30%",
                "@media (max-width: 600px)": {
                  width: "50%", //
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "15px",
                  background: "#F2F2F2",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="filled-basic"
              variant="outlined"
              placeholder="Password"
              type="password"
              sx={{
                width: "30%",
                "@media (max-width: 600px)": {
                  width: "75%", //
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "15px",
                  background: "#F2F2F2",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              className="bg-gray-950 rounded-xl"
              sx={{
                width: "30%",
                padding: "1rem",
                "@media (max-width: 600px)": {
                  width: "75%", //
                },

                "&:hover": {
                  backgroundColor: "#08deff",
                },
              }}
              variant="contained"
            >
              Giriş yap
            </Button>
            <div className="md:w-1/2 w-3/5">
              <Divider>
                <span className="font-bold">Login</span> With Orthers
              </Divider>
            </div>

            <div className="flex gap-4">
              <Button
                className="rounded-xl"
                sx={{
                  padding: "1rem",
                  color: "black",
                  textTransform: "lowercase",
                  border: "1px solid #1C1C1C",
                  "&:hover": {
                    border: "1px solid #1C1C1C",
                  },
                }}
                variant="outlined"
                startIcon={<Image src={googleLogo} />}
              >
                <p>
                  <span className="font-bold"> google</span> ile giriş yap
                </p>
              </Button>

              <Button
                className="rounded-xl"
                sx={{
                  padding: "1rem",
                  color: "black",
                  textTransform: "lowercase",
                  border: "1px solid #1C1C1C",
                  "&:hover": {
                    border: "1px solid #1C1C1C",
                  },
                }}
                variant="outlined"
                startIcon={<Image src={facebookLogo} />}
              >
                <p>
                  <span className="font-bold"> Facebook</span> ile giriş yap
                </p>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center md:gap-10 box-border flex-grow ">
          <div className="w-full flex flex-col justify-center items-center gap-6 md:ml-0 ml-7">
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold md:text-4xl text-2xl">Merhaba,</span>
              <p className="text-lg">
                Ozos’a giriş yap veya hesap oluştur, indirimleri kaçırma!
              </p>
            </div>

            <TextField
              id="filled-basic"
              variant="outlined"
              placeholder="Username"
              sx={{
                width: "30%",
                "@media (max-width: 600px)": {
                  width: "50%", //
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "15px",
                  background: "#F2F2F2",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="filled-basic"
              variant="outlined"
              placeholder="Password"
              type="password"
              sx={{
                width: "30%",
                "@media (max-width: 600px)": {
                  width: "75%", //
                },
              }}
              InputProps={{
                style: {
                  borderRadius: "15px",
                  background: "#F2F2F2",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              className="bg-gray-950 rounded-xl"
              sx={{
                width: "30%",
                padding: "1rem",
                "@media (max-width: 600px)": {
                  width: "75%", //
                },

                "&:hover": {
                  backgroundColor: "#08deff",
                },
              }}
              variant="contained"
            >
              Üye Ol
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
