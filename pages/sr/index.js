import Header from "@/components/Header";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";
import UrunCard from "@/components/UrunCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import MainFooter from "@/components/MainFooter";

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
  const [seciliFiltreler, setSeciliFiltreler] = useState([]);
  const [seciliKategoriler, setSeciliKategoriler] = useState([]);
  const [seciliBedenler, setSeciliBedenler] = useState([]);
  const search = localStorage.getItem("search");
  const urunlerListService = async () => {
    debugger;
    const reqBody = JSON.stringify({
      search: search,
      search1: seciliFiltreler[0] || "",
      search2: seciliFiltreler[1] || "",
      search3: seciliFiltreler[2] || "",
      search4: "",
      search5: "",
      search6: "",
      search7: "",
      search8: "",
    });
    try {
      const response = await axios.post(
        "https://localhost:7257/Urun/urunArama",
        reqBody,
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
  }, [search]);

  useEffect(() => {
    urunlerListService();
  }, [seciliFiltreler]);

  return (
    <>
      <div className="flex flex-col justify-center gap-1">
        {/* HEADER */}
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>
        {/* FİLTRE EKRANI SOLDA SABİT */}
        <div className="  flex justify-center gap-3">
          <div className="sticky top-20  h-screen  bg-gray-100">
            <Filter
              seciliFiltreler={seciliFiltreler}
              setSeciliFiltreler={setSeciliFiltreler}
            />
          </div>
          {/* ÜRÜN KARTLARI */}
          <div className="">
            <UrunCard urunler={urunData} />
          </div>
        </div>
        <div className=" w-full  bottom-0 mt-16">
          <MainFooter />
        </div>
      </div>
    </>
  );
}
