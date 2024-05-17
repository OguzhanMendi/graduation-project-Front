import Header from "@/components/Header";
import { Divider } from "@mui/material";
import Detay from "./Components/Detay";
import CokSatanlar from "@/components/CokSatanlar";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import MainFooter from "@/components/MainFooter";

export default function index() {
  const [urun, setUrun] = useState();
  const [benzerUrunlerData, setBenzerUrunlerData] = useState([{}]);
  const pathname = usePathname();
  const id = pathname?.replace(/^\/+/g, "");

  const urunbulService = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7257/Urun/urunBul?id=${id}`,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setUrun(response.data);
      }
    } catch (err) {}
  };

  const benzerUrunlerService = async () => {
    debugger;
    try {
      const reqBody = JSON.stringify({
        urunMarka: urun?.urunMarka,
        urunKategori: urun?.urunKategori,
      });

      const response = await axios.post(
        `https://localhost:7257/Urun/benzerUrunler`,
        reqBody,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setBenzerUrunlerData(response?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    urunbulService();
  }, [pathname]);

  useEffect(() => {
    if (urun) {
      benzerUrunlerService();
    }
  }, [urun]);

  const popUrunler = [
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
      ad: "İphone 11",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 1,
      fiyat: 3000,
      indirim: 2500,
      ImgUrl: "/ip-15.jpg",
    },
  ];
  const baslik = "Benzer Ürünler";

  const [sepetAdet, setSepetAdet] = useState(0);

  const handleSepeteEkle = (adet) => {
    setSepetAdet(adet);
  };

  return (
    <div className="flex flex-col">
      <div className=" sticky top-0 z-50 bg-white">
        <Header sepetAdet={sepetAdet} />
      </div>
      <div>
        <Divider />
      </div>
      <div className="">
        <Detay urun={urun} onSepeteEkle={handleSepeteEkle} />
      </div>
      <div className="mt-3 flex  justify-center">
        <CokSatanlar urunler={benzerUrunlerData} baslik={baslik} />
      </div>

      <div className=" w-full  bottom-0 mt-5">
        <MainFooter />
      </div>
    </div>
  );
}
