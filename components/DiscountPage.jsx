import { useState, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/outline";

export default function DiscountPage() {
  const [kalanZaman, setKalanZaman] = useState(hesaplaKalanZaman());

  useEffect(() => {
    const timer = setInterval(() => {
      setKalanZaman(hesaplaKalanZaman());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function hesaplaKalanZaman() {
    const bitisTarihi = new Date("2024-05-30"); // İndirim bitiş tarihi
    const fark = bitisTarihi.getTime() - new Date().getTime();
    let kalanZaman = {};

    if (fark > 0) {
      kalanZaman = {
        günler: Math.floor(fark / (1000 * 60 * 60 * 24)),
        saatler: Math.floor((fark / (1000 * 60 * 60)) % 24),
        dakikalar: Math.floor((fark / 1000 / 60) % 60),
        saniyeler: Math.floor((fark / 1000) % 60),
      };
    }

    return kalanZaman;
  }
  return (
    <div className="relative bg-red-600 w-full text-white text-center py-4">
      <div className="flex justify-around items-center">
        <p className="text-2xl font-extrabold mb-2 animate-pulse">
          İndirim Fırsatlarını Kaçırmayın
        </p>
        <div className="flex items-center">
          <ClockIcon className="h-8 w-8 text-white mr-2" /> {/* Saat iconu */}
          <p className="text-lg">
            Kaçırmayın! {kalanZaman.günler} gün {kalanZaman.saatler} saat{" "}
            {kalanZaman.dakikalar} dakika {kalanZaman.saniyeler} saniye kaldı!
          </p>
        </div>
        <div className="absolute top-0 right-0 px-2 py-1 bg-black text-white text-sm rounded-xl">
          ozos ile indirimde!
        </div>
      </div>
    </div>
  );
}
