import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function CokSatanlar({ urunler, baslik }) {
  const [startItemIndex, setStartItemIndex] = useState(0);

  const baslikRengi =
    baslik === "Çok Satanlar"
      ? "text-green-500"
      : baslik === "Popüler Ürünler"
      ? "text-red-400"
      : baslik === "Bu Ay Herkes Peşinde"
      ? "text-slate-400"
      : "";

  const scrollLeft = () => {
    if (startItemIndex > 0) {
      setStartItemIndex((prevIndex) => prevIndex - 1);
    }
  };

  const scrollRight = () => {
    if (startItemIndex < urunler.length - 4) {
      setStartItemIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="relative mx-auto max-w-screen-lg mt-2">
      <div className={`text-2xl font-semibold ${baslikRengi}`}>{baslik}</div>
      <div className="flex items-center justify-center">
        {startItemIndex >= 0 && (
          <IconButton
            onClick={scrollLeft}
            className="bg-white shadow-lg rounded-full hover:bg-blue-900 mr-2"
          >
            <MdChevronLeft />
          </IconButton>
        )}
        <div className="flex mt-2 space-x-4 overflow-hidden relative">
          {urunler
            ?.slice(startItemIndex, startItemIndex + 4)
            .map((urun, index) => (
              <Transition
                as={Card}
                key={index}
                show={true}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="max-w-xs mx-auto"
              >
                <Link href={`/${urun.id}`} passHref>
                  <Card
                    sx={{ maxWidth: 220 }}
                    className={`overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-transparent cursor-pointer p-2 mb-2 ${
                      baslik === "Popüler Ürünler" ? "bg-red-50" : ""
                    } ${baslik === "Çok Satanlar" ? "bg-green-100" : ""} ${
                      baslik === "Bu Ay Herkes Peşinde" ? "bg-slate-50" : ""
                    }`}
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
                          className="font-semibold mb-2"
                        >
                          İndirimli Fiyat: {urun.fiyat - urun.indirim} TL
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </Transition>
            ))}
        </div>
        {startItemIndex < urunler.length - 3 && (
          <IconButton
            onClick={scrollRight}
            className="bg-white shadow-lg rounded-full hover:bg-blue-900 ml-2"
          >
            <MdChevronRight />
          </IconButton>
        )}
      </div>
    </div>
  );
}
