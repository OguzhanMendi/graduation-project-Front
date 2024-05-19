import { useState, useCallback } from "react";
import {
  Button,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { apiFormatter } from "@/utils/DateFormatter";
import axios from "axios";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useSepet } from "@/context/SepetContext";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
export default function Detay({ urun, onSepeteEkle }) {
  const user = useSelector((state) => state.user);
  const [adet, setAdet] = useState(1);
  const [open, setOpen] = useState(false);
  const { toplamAdetGuncelle } = useSepet();
  const [storage, setStorage] = useState("128gb"); // Depolama seçeneği

  const handleArttir = () => {
    setAdet((prevQuantity) => prevQuantity + 1);
  };

  const handleAzalt = () => {
    if (adet > 1) {
      setAdet((prevQuantity) => prevQuantity - 1);
    }
  };

  const snackAc = () => {
    setOpen(true);
  };
  const snackKapat = () => {
    setOpen(false);
  };

  const sepeteEkleService = async () => {
    debugger;

    const date = Date.now();
    const trh = apiFormatter(date);
    const hesaplananToplamTutar = adet * urun.urunFiyat;
    try {
      const reqBody = JSON.stringify({
        urunAd: urun?.urunAd,
        urunAdet: adet,
        urunFiyat: urun?.urunFiyat,
        toplamTutar: hesaplananToplamTutar,
        imgUrl: urun?.imgUrl,
        tarih: trh,
        siparisId: "",
        urunId: urun?.id,
      });

      const response = await axios.post(
        `https://localhost:7257/Sepet/SepeteEkle`,
        reqBody,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        snackAc();
        onSepeteEkle(adet);
        // Ürün bazında localStorage'da adet güncellemesi yapalım
        const mevcutSepet = JSON.parse(localStorage.getItem("sepet")) || {};
        const mevcutUrun = mevcutSepet[urun.id] || { urunAdet: 0 };

        // Mevcut adeti yeni eklenen adetle topla
        mevcutUrun.urunAdet += adet;

        mevcutSepet[urun.id] = mevcutUrun;
        localStorage.setItem("sepet", JSON.stringify(mevcutSepet));
        toplamAdetGuncelle();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center  mt-5 gap-5">
      <div className="max-w-screen-lg bg-white rounded-lg p-6 shadow-xl flex">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src={`https://localhost:7257/Urun/${urun?.imgUrl}`}
              alt="iPhone 15"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {urun?.urunAd}
            </h1>
            <p
              className="text-lg text-gray-700 items-center"
              style={{ textAlign: "justify" }}
            >
              {urun?.urunAciklama}
            </p>
          </div>
          <div className="flex gap-5  justify-center items-center mt-2 mb-3">
            <div>
              <span className="text-gray-800 mr-2 font-semibold">Marka:</span>
              <span className="text-gray-700 font-semibold">
                {urun?.urunMarka}
              </span>
            </div>
            <div>
              <span className="text-gray-800 mr-2 font-semibold">Stok:</span>
              <span className="text-gray-700 font-semibold">
                {urun?.urunAdet}
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center mb-3">
            <span className="text-gray-800 mr-2">Puan:</span>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3.25a.75.75 0 01.67.41l1.69 3.42 3.77.55a.75.75 0 01.42 1.28l-2.73 2.66.64 3.75a.75.75 0 01-1.09.8L10 13.16l-3.36 1.77a.75.75 0 01-1.09-.8l.64-3.75-2.73-2.66a.75.75 0 01.42-1.28l3.77-.55 1.69-3.42A.75.75 0 0110 3.25zM10 2a1 1 0 01.88.53l1.82 3.67 4.09.59a1 1 0 01.56 1.7l-2.96 2.89.7 4.09a1 1 0 01-1.45 1.05L10 14.15l-3.7 1.95a1 1 0 01-1.45-1.05l.7-4.09-2.96-2.89a1 1 0 01.56-1.7l4.09-.59L9.12 2.53A1 1 0 0110 2zm0 13.76a.75.75 0 01-.67-.41L7.76 12H4.19l3.1-3.02a.75.75 0 011.09 0L10 11.36l1.72-3.38a.75.75 0 011.09 0l3.1 3.02H12.24l-1.57 3.35a.75.75 0 01-.67.41z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-800 font-semibold">2.5</span>
            </div>
          </div>
          <div className="flex justify-center items-center mb-6">
            <span className="text-gray-800 mr-2">Adet:</span>
            <Button
              onClick={handleAzalt}
              variant="contained"
              color="secondary"
              size="small"
              sx={{
                borderRadius: "10rem",
              }}
            >
              <Remove />
            </Button>
            <span className="bg-gray-200 px-3 py-1 rounded-xl font-semibold">
              {adet}
            </span>
            <Button
              onClick={handleArttir}
              variant="contained"
              color="secondary"
              size="small"
              sx={{
                borderRadius: "10rem",
              }}
            >
              <Add />
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center mb-6">
            <div className="flex gap-5 justify-center items-center">
              <span className="text-gray-800">Ürün özellikleri:</span>

              <div className="flex items-center">
                {/* <span className="mr-2">Depolama:</span> */}
                <div className="flex flex-col gap-3">
                  <div
                    className={`border border-gray-300 rounded-md px-2 py-1 mr-2 cursor-pointer ${
                      storage === "128gb" && "bg-gray-200"
                    }`}
                    onClick={() => setStorage("128gb")}
                  >
                    {urun?.urunozellik}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-red-600 font-bold p-3 text-xl">
              {" "}
              {urun?.urunFiyat} TL
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              onClick={() => {
                sepeteEkleService();
              }}
            >
              Sepete Ekle
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-2 mb-2 bg-blue-200 p-3 rounded-xl">
          <span className="text-gray-700 font-bold text-sm">OZOS</span>
          <img src="/mavitik.png" alt="Mavittik Icon" className="h-6 w-6" />
          <Card
            sx={{
              backgroundColor: "green", // Silik mavi arka plan
              color: "white",
              display: "flex",
              alignItems: "center",
              padding: "4px 8px", // Daha küçük padding
              borderRadius: "8px",
              boxShadow: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              9.9
            </Typography>
          </Card>
        </div>
        <div className="flex gap-x-4 items-center bg-gray-200 rounded-lg p-3 mb-4 text-center">
          <ReceiptIcon fontSize="large" />
          <span>Kurumsal faturaya uygun</span>
        </div>
        <div className=" flex gap-x-4 items-center bg-orange-500 text-white rounded-lg p-3 text-center">
          <LocalShippingIcon fontSize="large" />
          <span> En geç 1 Haziran Cumartesi kapında</span>
        </div>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={snackKapat}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ transition: "all 0.3s ease-in-out" }}
      >
        <Alert
          onClose={snackKapat}
          severity="success"
          variant="filled"
          sx={{ width: "100%", display: "flex", alignItems: "center" }}
          icon={<CheckCircleIcon fontSize="inherit" />}
        >
          Sepete Eklendi
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={snackKapat}
            sx={{ marginLeft: "auto" }}
          ></IconButton>
        </Alert>
      </Snackbar>
    </div>
  );
}
