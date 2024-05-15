import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Link from "next/link";

export default function UrunCard({ urunler }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {urunler.map((urun, index) => (
        <Link href={`/${urun.id}`} passHref>
          <Card
            key={index}
            sx={{ maxWidth: 220 }}
            className=" transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-lg hover:border-transparent cursor-pointer hover:border border-blue-900"
          >
            <CardMedia
              sx={{ height: 130 }}
              image={`https://localhost:7257/Urun/${urun?.imgUrl}`}
              title="Ürün Resmi"
            />
            <CardContent className="text-center">
              <Typography gutterBottom variant="h5" component="div">
                {urun?.urunAd}
              </Typography>
              <Typography variant="body2" color="text.primary" className="mb-2">
                {urun?.urunAciklama?.slice(0, 30)}
              </Typography>
              <Rating name="read-only" value={3} readOnly className="mb-2" />
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
                  İndirimli Fiyat: {urun.fiyat - urun.indirim} TL
                </Typography>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
