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
