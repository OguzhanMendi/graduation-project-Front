import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useSelector } from "react-redux";
import axios from "axios";

export default function CokSatanlar({ urunler, baslik }) {
  const [startItemIndex, setStartItemIndex] = useState(0);
  const user = useSelector((state) => state.user);
  const [favoriler, setFavoriler] = useState([]);
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

  useEffect(() => {
    const favList = async () => {
      if (user?.user?.email) {
        try {
          const response = await axios.post(
            "https://localhost:7257/Fav/favList",
            null,
            {
              headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 200) {
            const favoriIds = response?.data?.map((fav) => fav?.urunId);
            setFavoriler(favoriIds);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    favList();
  }, [user?.user?.email]); // Bu useEffect'in user?.user?.email değeri değiştiğinde yeniden çalışmasını sağlar

  const favEkle = async (urun) => {
    if (!user?.user?.email) {
      alert("Favorilere eklemek için lütfen giriş yapın.");
      return;
    }

    try {
      const reqBody = JSON.stringify({
        id: 0,
        urunId: urun?.id,
        email: user?.user?.email,
      });

      const response = await axios.post(
        "https://localhost:7257/Fav/favEkle",
        reqBody,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setFavoriler([...favoriler, urun.id]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const favSil = async (urun) => {
    if (!user?.user?.email) {
      alert("Favorilerden silmek için lütfen giriş yapın.");
      return;
    }

    try {
      const reqBody = JSON.stringify({
        urunId: urun.id,
        email: user?.user?.email,
      });

      const response = await axios.post(
        "https://localhost:7257/Fav/favSil",
        reqBody,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setFavoriler(favoriler.filter((favId) => favId !== urun.id));
      }
    } catch (err) {
      console.error(err);
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
                <Card
                  sx={{
                    position: "relative",
                    maxWidth: 250,
                    backgroundColor:
                      baslik === "Popüler Ürünler"
                        ? "#E5F3FF"
                        : baslik === "Çok Satanlar"
                        ? "#E0F7FA"
                        : baslik === "Bu Ay Herkes Peşinde"
                        ? "#E8EAF6"
                        : "#FFFFFF",
                    padding: "16px",
                  }}
                  className={`overflow-hidden transform transition-transform duration-300  hover:shadow-lg hover:border-transparent cursor-pointer p-2 mb-2 relative`}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      border: favoriler.includes(urun.id) ? "" : "none",
                      "&:hover": {
                        border: favoriler.includes(urun.id)
                          ? "2px solid "
                          : "2px solid orange",
                      },
                    }}
                    aria-label="favorite"
                    onClick={() => {
                      favoriler.includes(urun.id)
                        ? favSil(urun)
                        : favEkle(urun);
                    }}
                  >
                    {favoriler.includes(urun.id) ? (
                      <FavoriteIcon sx={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon />
                    )}
                  </IconButton>
                  <Link href={`/${urun.id}`} passHref>
                    <CardMedia
                      sx={{ height: 220 }}
                      image={`https://localhost:7257/Urun/${urun.imgUrl}`}
                      title="Ürün Resmi"
                    />
                    <CardContent className="text-center">
                      <Typography gutterBottom variant="h5" component="div">
                        {urun.urunAd}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        className="mb-2 line-clamp-2"
                      >
                        {urun.urunAciklama}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={2}
                        readOnly
                        className="mb-2"
                      />
                      {urun.indirim ? (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="line-through mb-2"
                        >
                          {urun.urunFiyat} TL
                        </Typography>
                      ) : (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="mb-2"
                        >
                          {urun.urunFiyat} TL
                        </Typography>
                      )}
                      {urun.indirim && (
                        <Typography
                          variant="body2"
                          color="red"
                          className="font-semibold mb-2"
                        >
                          İndirimli Fiyat: {urun.urunFiyat - urun.indirim} TL
                        </Typography>
                      )}
                    </CardContent>
                  </Link>
                </Card>
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
