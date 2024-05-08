import { useState } from "react";
import { Button } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

export default function Detay() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("black"); // Renk seçeneği
  const [storage, setStorage] = useState("128gb"); // Depolama seçeneği

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleStorageChange = (event) => {
    setStorage(event.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="max-w-screen-lg bg-white rounded-lg p-6 shadow-xl flex">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="/ip-15.jpg"
              alt="iPhone 15"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">İPHONE 15</h1>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vulputate justo eget urna iaculis, in laoreet quam vestibulum.
            </p>
          </div>
          <div className="flex justify-center items-center mb-6">
            <span className="text-gray-800 mr-2">Rating:</span>
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
              onClick={handleDecrement}
              variant="contained"
              color="secondary"
              size="small"
            >
              <Remove />
            </Button>
            <span className="bg-gray-200 px-3 py-1">{quantity}</span>
            <Button
              onClick={handleIncrement}
              variant="contained"
              color="secondary"
              size="small"
            >
              <Add />
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center mb-6">
            <span className="text-gray-800 mb-2">Ürün özellikleri:</span>
            <div className="flex items-center mb-2">
              <span className="mr-2">Renk:</span>
              <div className="flex">
                <div
                  className="w-4 h-4 rounded-full bg-black border border-gray-300 mr-2 cursor-pointer"
                  onClick={() => setColor("black")}
                ></div>
                <div
                  className="w-4 h-4 rounded-full bg-silver border border-gray-300 mr-2 cursor-pointer"
                  onClick={() => setColor("silver")}
                ></div>
                <div
                  className="w-4 h-4 rounded-full bg-gold border border-gray-300 mr-2 cursor-pointer"
                  onClick={() => setColor("gold")}
                ></div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Depolama:</span>
              <div className="flex">
                <div
                  className={`border border-gray-300 rounded-md px-2 py-1 mr-2 cursor-pointer ${
                    storage === "128gb" && "bg-gray-200"
                  }`}
                  onClick={() => setStorage("128gb")}
                >
                  128GB
                </div>
                <div
                  className={`border border-gray-300 rounded-md px-2 py-1 mr-2 cursor-pointer ${
                    storage === "256gb" && "bg-gray-200"
                  }`}
                  onClick={() => setStorage("256gb")}
                >
                  256GB
                </div>
                <div
                  className={`border border-gray-300 rounded-md px-2 py-1 mr-2 cursor-pointer ${
                    storage === "512gb" && "bg-gray-200"
                  }`}
                  onClick={() => setStorage("512gb")}
                >
                  512GB
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="contained" color="primary" size="large">
              Sepete Ekle
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
