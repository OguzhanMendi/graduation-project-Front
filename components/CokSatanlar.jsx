import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function CokSatanlar({ urunler, baslik }) {
  const [showAll, setShowAll] = useState(false);

  // Tüm ürünleri göster/gizle fonksiyonu
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const baslikRengi =
    baslik === "Çok Satanlar"
      ? "text-green-500"
      : baslik === "Popüler Ürünler"
      ? "text-red-400"
      : baslik === "Bu Ay Herkes Peşinde"
      ? "text-slate-400"
      : "";

  return (
    <>
      <div className="relative mx-auto max-w-screen-lg mt-2 items-center">
        <div className={`text-2xl font-semibold ${baslikRengi}`}>{baslik}</div>
        <div
          className={`flex mt-2 space-x-4 justify-center ${
            showAll ? "flex-wrap" : ""
          }`}
        >
          {urunler
            ?.slice(0, showAll ? urunler.length : 4)
            .map((urun, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 220 }}
                className={`transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-lg hover:border-transparent cursor-pointer p-2 mb-2 ${
                  baslik === "Popüler Ürünler" ? "bg-red-50" : ""
                }  ${baslik === "Çok Satanlar" ? "bg-green-100" : ""}
                
                ${baslik === "Bu Ay Herkes Peşinde" ? "bg-slate-50" : ""}
                
                `}
              >
                <CardMedia
                  sx={{ height: 100 }}
                  image={urun.ImgUrl}
                  title="Ürün Resmi"
                />
                <CardContent className="text-center">
                  <Typography gutterBottom variant="h5" component="div">
                    {urun.ad}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    className="mb-2 line-clamp-2"
                  >
                    {urun.aciklama}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={urun.puan}
                    readOnly
                    className="mb-2"
                  />
                  {urun.indirim ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="line-through mb-2"
                    >
                      {urun.fiyat} TL
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-2"
                    >
                      {urun.fiyat} TL
                    </Typography>
                  )}
                  {urun.indirim && (
                    <Typography
                      variant="body2"
                      color="red"
                      className="font-semibold"
                    >
                      İndirimli Fiyat: {urun.fiyat - urun.indirim} TL
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
        </div>
        {/* Tüm ürünleri göster/gizle butonu */}
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleShowAll}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
          >
            {showAll ? (
              <MdVisibilityOff className="text-xl" />
            ) : (
              <MdVisibility className="text-xl" />
            )}
            <span>{showAll ? "Gizle" : "Tümünü Göster"}</span>
          </button>
        </div>
      </div>
    </>
  );
}
