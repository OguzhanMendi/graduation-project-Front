import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function UrunCard({ urunler }) {
  const user = useSelector((state) => state.user);
  const [favoriler, setFavoriler] = useState([]);

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
    <div>
      {urunler.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
          <FaExclamationTriangle size={100} className="mx-auto mb-4" />
          <div className="text-center text-xl text-red-900 font-semibold">
            !!!! Ürün bulunamadı !!!!
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {urunler.map((urun, index) => (
            <Card
              key={index}
              sx={{ maxWidth: 220 }}
              className="transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-lg hover:border-transparent cursor-pointer hover:border border-blue-900 relative"
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  border: favoriler.includes(urun.id)
                    ? "2px solid blue"
                    : "none",
                  "&:hover": {
                    border: favoriler.includes(urun.id)
                      ? "2px solid blue"
                      : "2px solid orange",
                  },
                }}
                aria-label="favorite"
                onClick={() => {
                  favoriler.includes(urun.id) ? favSil(urun) : favEkle(urun);
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
                  sx={{ height: 130 }}
                  image={`https://localhost:7257/Urun/${urun?.imgUrl}`}
                  title="Ürün Resmi"
                />
                <CardContent className="text-center">
                  <Typography gutterBottom variant="h5" component="div">
                    {urun?.urunAd}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    className="mb-2"
                  >
                    {urun?.urunAciklama?.slice(0, 30)}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={3}
                    readOnly
                    className="mb-2"
                  />
                  {urun.indirim ? (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="line-through mb-2"
                    >
                      {urun?.urunFiyat} TL
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="mb-2"
                    >
                      {urun?.urunFiyat} TL
                    </Typography>
                  )}
                  {urun?.indirim && (
                    <Typography
                      variant="body2"
                      color="red"
                      className="font-semibold"
                    >
                      İndirimli Fiyat: {urun.urunFiyat - urun.indirim} TL
                    </Typography>
                  )}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
