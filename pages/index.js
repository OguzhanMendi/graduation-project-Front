import CokSatanlar from "@/components/CokSatanlar";
import Header from "@/components/Header";
import Markalar from "@/components/Markalar";
import Textbar from "@/components/Textbar";
import { Divider } from "@mui/material";
import Badge from "@mui/material/Badge";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MainFooter from "@/components/MainFooter";
import ImgCard from "@/components/ImgCard";
import { BsArrowUp, BsWhatsapp } from "react-icons/bs";
import ImgFooter from "@/components/ImgFooter";
import DiscountPage from "@/components/DiscountPage";
import Banner from "@/components/Banner";
export default function Home() {
  useEffect(() => {
    cokSatanListService();
    popListService();
    herkesPListService();
  }, []);
  const [cokSatanData, setCokSataData] = useState([{}]);
  const [popData, setPopData] = useState([{}]);
  const [HerkesPesindeData, setHerkesPesindeData] = useState([{}]);
  const [showMessage, setShowMessage] = useState(false);

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

  // WhatsApp'a yönlendirme işlevi
  const redirectToWhatsapp = () => {
    // Buraya WhatsApp numaranızı girin
    const whatsappNumber = "+905538873264";
    // WhatsApp'a yönlendirme URL'si
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    // Yeni pencerede WhatsApp'a yönlendirme
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setscrolButonGoster(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  ////////************ ============================= */

  const cokSatanListService = async () => {
    debugger;
    try {
      const response = await axios.get(
        `https://localhost:7257/Urun/mainUrunler`,
        {
          headers: {
            headers: { Accept: "*/*", "Content-Type": "application/json" },
          },
        }
      );

      if (response.status === 200) {
        setCokSataData(response?.data);
      }
    } catch (err) {}
  };

  const popListService = async () => {
    debugger;
    try {
      const response = await axios.get(
        `https://localhost:7257/Urun/mainUrunler`,
        {
          headers: {
            headers: { Accept: "*/*", "Content-Type": "application/json" },
          },
        }
      );

      if (response.status === 200) {
        setPopData(response?.data);
      }
    } catch (err) {}
  };
  const herkesPListService = async () => {
    debugger;
    try {
      const response = await axios.get(
        `https://localhost:7257/Urun/mainUrunler`,
        {
          headers: {
            headers: { Accept: "*/*", "Content-Type": "application/json" },
          },
        }
      );

      if (response.status === 200) {
        setHerkesPesindeData(response?.data);
      }
    } catch (err) {}
  };

  return (
    // <>
    //   <div className="flex flex-col ">
    //     <div className=" sticky top-0 z-50 bg-white">
    //       <Header />
    //     </div>
    //     <div>
    //       <Divider />
    //     </div>
    //     <div className="flex justify-center">
    //       <Markalar />
    //     </div>

    //     <div className="flex justify-center">
    //       <Textbar />
    //     </div>
    //     <div className="flex  justify-center">
    //       <CokSatanlar urunler={cokSatanData} baslik={coksatan} />
    //     </div>

    //     <div className="flex  justify-center">
    //       <CokSatanlar urunler={popData} baslik={popbasik} />
    //     </div>
    //     <div className="flex  justify-center">
    //       <CokSatanlar urunler={HerkesPesindeData} baslik={buAyBaslik} />
    //     </div>

    //     {/* Sayfanın en üstüne dön butonu */}
    //     {scrolButonGoster && (
    //       <div className="fixed bottom-10 right-10 z-50">
    //         <button
    //           onClick={scrollUst}
    //           className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900 transition duration-300"
    //         >
    //           <BsArrowUp className="text-2xl" />
    //         </button>
    //       </div>
    //     )}
    //   </div>
    //   <div className="absolute bottom-0  bg-white">
    //     <Footer />
    //   </div>
    // </>
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center w-full">
          <DiscountPage />
        </div>
        <div className="sticky top-0 z-50 bg-white">
          <Header />
        </div>

        <div className="flex justify-center">
          <Markalar />
        </div>
        <div className="flex justify-center">
          <ImgCard />
        </div>
        <div className="flex justify-center">
          <Textbar />
        </div>

        <div className="flex justify-center">
          <CokSatanlar urunler={cokSatanData} baslik={coksatan} />
        </div>
        <div className="flex justify-center">
          <CokSatanlar urunler={popData} baslik={popbasik} />
        </div>
        <div className="flex justify-center">
          <CokSatanlar urunler={HerkesPesindeData} baslik={buAyBaslik} />
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
        <div className="fixed bottom-10 left-5 z-50">
          <Badge
            badgeContent={
              <span
                className={`whitespace-nowrap  p-4 mb-12 ml-10 rounded-2xl shadow-lg bg-white text-black  ${
                  showMessage ? "opacity-100" : "opacity-0"
                }`}
              >
                Selam , Size nasıl yardımcı olabilirim ?
              </span>
            }
            overlap="circle"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <button
              onClick={redirectToWhatsapp}
              className="group relative bg-green-500 text-white rounded-full p-4 hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
              <div className="relative">
                <BsWhatsapp className="text-4xl animate-spin-slow" />
              </div>
            </button>
          </Badge>
        </div>

        {/* Sağda ve solda reklam bannerları */}

        {/* İçeriğin geri kalan kısmı esneyerek alt bilgiyi aşağı iter */}
        <div className="flex-grow"></div>

        <div className="flex justify-center mt-16 p-3">
          <ImgFooter />
        </div>

        <div className="mt-5">
          <MainFooter />
        </div>
      </div>
    </>
  );
}
