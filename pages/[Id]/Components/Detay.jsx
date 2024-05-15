import { useState } from "react";
import { Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function Detay({ urun }) {
  const [adet, setAdet] = useState(1);
  const [color, setColor] = useState("black"); // Renk seçeneği
  const [storage, setStorage] = useState("128gb"); // Depolama seçeneği

  const handleArttir = () => {
    setAdet((prevQuantity) => prevQuantity + 1);
  };

  const handleAzalt = () => {
    if (adet > 1) {
      setAdet((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-5">
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
                <div className="flex">
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
          </div>
          <div className="flex justify-center">
            <Button variant="contained" color="primary" size="large" fullWidth>
              Sepete Ekle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
