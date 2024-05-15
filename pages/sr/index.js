import Header from "@/components/Header";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";
import UrunCard from "@/components/UrunCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./Components/Filter";

export default function index() {
  const urunler = [
    {
      ad: "İphone 15",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 3,
      fiyat: 4000,
      indirim: 500,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 13",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 2000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 12",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1500,
      indirim: 200,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 12",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1500,
      indirim: 200,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 12",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1500,
      indirim: 200,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 12",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1500,
      indirim: 200,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 12",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1500,
      indirim: 200,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 12",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1500,
      indirim: 200,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 12",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1500,
      indirim: 200,
      ImgUrl: "/ip-15.jpg",
    },
  ];

  const [urunData, setUrunData] = useState([{}]);

  const urunlerListService = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7257/Urun/urunler",
        null,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setUrunData(response?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    urunlerListService();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center gap-1">
        {/* HEADER */}
        <div className="sticky top-0 z-30 bg-white">
          <Header />
        </div>
        {/* FİLTRE EKRANI SOLDA SABİT */}
        <div className="  flex justify-center">
          <div className="sticky top-20  h-screen  bg-gray-100">
            <Filter />
          </div>
          {/* ÜRÜN KARTLARI */}
          <div className="">
            <UrunCard urunler={urunData} />
          </div>
        </div>
      </div>
    </>
  );
}
