import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

export default function UrunCard({ urunler }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {urunler.map((urun, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 220 }}
          className=" transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-lg hover:border-transparent cursor-pointer hover:border border-blue-900"
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
            <Typography variant="body2" color="text.primary" className="mb-2">
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
              <Typography variant="body2" color="red" className="font-semibold">
                İndirimli Fiyat: {urun.fiyat - urun.indirim} TL
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
