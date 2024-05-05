import CokSatanlar from "@/components/CokSatanlar";
import Header from "@/components/Header";
import Markalar from "@/components/Markalar";
import Textbar from "@/components/Textbar";
import { Divider } from "@mui/material";
import { BsArrowUp } from "react-icons/bs";

import { useState, useEffect, useRef } from "react";

export default function Home() {
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
      ad: "İphone 11",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 1,
      fiyat: 3000,
      indirim: 2500,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 16",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 10000,
      indirim: 2500,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 1",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 1,
      fiyat: 8900,
      indirim: 2500,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
  ];

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
    {
      ad: "İphone 16",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 10000,
      indirim: 2500,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 1",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 1,
      fiyat: 8900,
      indirim: 2500,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
    {
      ad: "İphone 2",
      aciklama: "256 GB Ultra Lüks İphone.",
      puan: 5,
      fiyat: 1000,
      indirim: 300,
      ImgUrl: "/ip-15.jpg",
    },
  ];

  const coksatan = "Çok Satanlar";
  const popbasik = "Popüler Ürünler";
  const buAyBaslik = "Bu Ay Herkes Peşinde";

  // Sayfanın en üstüne dön
  const scrollUst = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [scrolButonGoster, setscrolButonGoster] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setscrolButonGoster(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col ">
        <div className=" sticky top-0 z-50 bg-white">
          <Header />
        </div>
        <div>
          <Divider />
        </div>
        <div className="flex justify-center">
          <Markalar />
        </div>
        <div className="flex justify-center">
          <Textbar />
        </div>
        <div className="flex  justify-center">
          <CokSatanlar urunler={urunler} baslik={coksatan} />
        </div>

        <div className="flex  justify-center">
          <CokSatanlar urunler={popUrunler} baslik={popbasik} />
        </div>
        <div className="flex  justify-center">
          <CokSatanlar urunler={popUrunler} baslik={buAyBaslik} />
        </div>

        {/* Sayfanın en üstüne dön butonu */}
        {scrolButonGoster && (
          <div className="fixed bottom-10 right-10 z-50">
            <button
              onClick={scrollUst}
              className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900 transition duration-300"
            >
              <BsArrowUp className="text-2xl" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
