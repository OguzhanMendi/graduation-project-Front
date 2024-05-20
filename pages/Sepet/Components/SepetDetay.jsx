import { Button, TextField, Typography } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import LinearProgress from "@mui/material/LinearProgress";
import { useSepet } from "@/context/SepetContext";
export default function SepetDetay() {
  const { toplamAdetGuncelle } = useSepet();
  const router = useRouter();
  // Alışveriş sepetindeki ürünleri saklamak için state tanımla
  const [urunler, setUrunler] = useState([]);
  const [openprog, setOpenProg] = useState(false);
  const [indkod, setIndkod] = useState("");

  const [indkodData, setIndkodData] = useState("");
  // Alışveriş sepetinden ürünleri getiren fonksiyon
  const alisverisSepetiGetir = async () => {
    try {
      const reqBody = JSON.stringify({
        indKod: indkod || "",
      });

      const response = await axios.post(
        `https://localhost:7257/Sepet/SepetList`,
        reqBody,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setUrunler(response?.data);
        const indirimKod = response?.data?.[0]?.indKod || "";
        setIndkodData(indirimKod);
      }
    } catch (error) {
      console.error("Alışveriş sepeti verileri alınırken hata oluştu:", error);
    }
  };

  useEffect(() => {
    alisverisSepetiGetir();
  }, []);

  const [adetler, setAdetler] = useState();
  const handleArttir = async (id) => {
    debugger;
    try {
      setAdetler((prevAdetler) =>
        prevAdetler.map((adet) =>
          adet.id === id ? { ...adet, adet: adet.adet + 1 } : adet
        )
      );

      const yeniAdet = adetler.find((adet) => adet.id === id)?.adet + 1;
      const urun = urunler.find((adet) => adet.id === id);
      await AdetDegistirService(
        id,
        yeniAdet,
        urunlerinToplamHesapla(urun, yeniAdet),
        urun.id
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleAzalt = async (id) => {
    try {
      setAdetler((prevAdetler) =>
        prevAdetler.map((adet) =>
          adet.id === id && adet.adet > 1
            ? { ...adet, adet: adet.adet - 1 }
            : adet
        )
      );
      const yeniAdet = adetler.find((adet) => adet.id === id)?.adet - 1;
      const urun = urunler.find((adet) => adet.id === id);

      await AdetDegistirService(
        id,
        yeniAdet,
        urunlerinToplamHesapla(urun, yeniAdet)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const urunlerinToplamHesapla = (urun, yeniAdet) => {
    debugger;
    return yeniAdet * urun.urunFiyat;
  };

  const user = useSelector((state) => state.user);
  const genelToplam = urunler.reduce(
    (total, item) => total + item.toplamTutar,
    0
  );

  const indirimliGenelToplam = urunler.reduce(
    (total, item) => total + item.indirimliTutar,
    0
  );

  const toplamUrunAdedi = urunler.reduce(
    (total, item) => total + item.urunAdet,
    0
  );

  useEffect(() => {
    if (urunler) {
      setAdetler(
        urunler.map((urun) => ({ id: urun.id, adet: urun.urunAdet || null }))
      );
    }
  }, [urunler]);

  const AdetDegistirService = async (id, urunAdet, toplamTutar, urunId) => {
    debugger;
    try {
      const reqBody = JSON.stringify({
        id: id,
        urunAdet: urunAdet,
        toplamTutar: toplamTutar,
      });

      const response = await axios.post(
        "https://localhost:7257/Sepet/SepetAdetDegistir",
        reqBody,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setOpenProg(true);
        await alisverisSepetiGetir();
        setOpenProg(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sepetiOnayla = async () => {
    const reqBody = JSON.stringify({
      id: 0,
      siparisId: "",
      aktifmi: false,
      useremail: user?.user?.email,
    });

    const response = await axios.post(
      "https://localhost:7257/Sepet/SepetOnayla",
      reqBody,
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      alert("Siparişiniz başarıyla alındı. Anasayfaya yönlendiriliyorsunuz.");
      localStorage.removeItem("sepet");
      localStorage.removeItem("");
      router.push("/");
    }
  };

  return (
    <div>
      {openprog ? (
        <div>
          <LinearProgress color="secondary" />
        </div>
      ) : (
        <>
          {" "}
          {urunler.length === 0 ? (
            <div className="mt-5 text-center text-5xl font-semibold">
              Sepetiniz boş
            </div>
          ) : (
            <>
              {user?.user?.email ? (
                <div></div>
              ) : (
                <div className="mt-5 mb-5 flex justify-center items-center">
                  <div className="flex items-center gap-x-2">
                    <PersonIcon />
                    <span className="text-lg font-semibold">
                      Alışverişini daha hızlı tamamlamak için{" "}
                      <a className="text-blue-800" href="/login">
                        Giriş Yap
                      </a>
                    </span>
                  </div>
                </div>
              )}
              <div className="flex justify-center gap-10">
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-xl ">
                    Sepetim({toplamUrunAdedi} Ürün)
                  </span>
                  {urunler.map((item) => (
                    <div
                      key={item.id}
                      className="mt-2 border-2 rounded-lg shadow-lg flex p-5 gap-x-5"
                    >
                      <Link href={`/${item?.urunId}`}>
                        <img
                          src={`https://localhost:7257/Urun/${item?.imgUrl}`}
                          width={200}
                        />
                      </Link>
                      <div className="flex font-semibold text-lg items-center gap-x-10">
                        <span className="text-center text-2xl">
                          {item.urunAd}
                        </span>
                        <div className="flex items-center">
                          <span className="text-gray-800 mr-2">Adet:</span>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            sx={{
                              borderRadius: "10rem",
                            }}
                            onClick={() => handleAzalt(item?.id)}
                          >
                            <Remove />
                          </Button>
                          <span className="bg-gray-200 px-3 py-1 rounded-xl font-semibold">
                            {adetler.find((adet) => adet.id === item.id)
                              ?.adet || 1}
                          </span>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            sx={{
                              borderRadius: "10rem",
                            }}
                            onClick={() => handleArttir(item.id)}
                          >
                            <Add />
                          </Button>
                        </div>
                        <span className="text-red-600">
                          {item.toplamTutar} TL
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Özet */}
                <div className="sticky top-28 z-50 h-full border-4 gap-5 p-5 rounded-xl shadow-xl">
                  <div className="p-5 flex flex-col gap-5">
                    <h2 className="text-lg font-bold text-center mb-4">
                      Sipariş Özeti
                    </h2>
                    <div className="flex gap-1">
                      <TextField
                        id="outlined-basic"
                        label="İNDİRİM KODU"
                        variant="outlined"
                        value={indkod}
                        onChange={(e) => {
                          setIndkod(e.target.value);
                        }}
                      />
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => {
                          alisverisSepetiGetir();
                        }}
                      >
                        AKTİF ET
                      </Button>
                    </div>
                    <div className="flex justify-between items-center gap-1">
                      <span className="text-lg">Toplam Tutar:</span>
                      {/* İndirim varsa indirimli genel toplamı göster */}
                      {indkodData && (
                        <Typography
                          variant="body1"
                          component="span"
                          style={{ textDecoration: "line-through" }}
                        >
                          {genelToplam} TL
                        </Typography>
                      )}
                      <Typography variant="body1" component="span">
                        {/* İndirim varsa indirimli genel toplamı göster */}
                        {indkodData ? indirimliGenelToplam : genelToplam} TL
                      </Typography>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() => {
                        if (user.user.email != null && user.user.email != "") {
                          sepetiOnayla();
                        } else {
                          alert("Lütfen Giriş Yapın....");
                          router.push("/login");
                        }
                      }}
                    >
                      Sepeti Onayla
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
