import Header from "@/components/Header";
import { Divider } from "@mui/material";
import Detay from "./Components/Detay";
import CokSatanlar from "@/components/CokSatanlar";

export default function index() {
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
  return (
    <div className="flex flex-col">
      <div className=" sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div>
        <Divider />
      </div>
      <div className="">
        <Detay />
      </div>
      <div className="mt-3 flex  justify-center">
        <CokSatanlar urunler={popUrunler} baslik={baslik} />
      </div>
    </div>
  );
}
