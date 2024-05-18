import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import SepetDetay from "./Components/SepetDetay";
import MainFooter from "@/components/MainFooter";

export default function Sepet() {
  return (
    <div className="flex flex-col">
      {/* Başlık */}
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div>
        <SepetDetay />
      </div>
      {/* 
      <div className="relative  w-full  bottom-0 mt-5">
        <MainFooter />
      </div> */}
    </div>
  );
}
