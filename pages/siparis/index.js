import { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Collapse,
} from "@mui/material";
import Header from "@/components/Header";
import axios from "axios";
import { useSelector } from "react-redux";
import { dateFormatter } from "@/utils/DateFormatter";
import AddIcon from "@mui/icons-material/Add";

export default function index() {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [ayrintiData, setAyrintiData] = useState([]);

  const gecmisService = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7257/Sepet/gecmisSiparisler?email=${user?.user?.email}`,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "Application/json",
          },
        }
      );

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    gecmisService();
  }, []);

  const siparisDetay = async (siparisId) => {
    try {
      const response = await axios.get(
        `https://localhost:7257/Sepet/siparisIdDetay?siparisId=${siparisId}`,
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "Application/json",
          },
        }
      );

      if (response.status === 200) {
        setAyrintiData(response.data);
      }
    } catch (err) {
      console.error("Error fetching detail data:", err);
    }
  };

  const handleDetayGoster = (siparisId) => {
    if (selectedOrderId === siparisId) {
      setSelectedOrderId(null);
    } else {
      setSelectedOrderId(siparisId);
      siparisDetay(siparisId);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto my-4 font-semibold">
        <Typography variant="h4" component="h1" gutterBottom>
          Geçmiş Siparişlerim
        </Typography>
        <List>
          {data.map((o, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText primary={`Sipariş Numarası: ${o?.siparisId}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Tarih: ${dateFormatter(o?.tarih)}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Toplam Tutar: ${o?.toplamTutar} TL`} />
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  color="primary"
                  className="rounded-full"
                  onClick={() => handleDetayGoster(o?.siparisId)}
                  startIcon={
                    selectedOrderId === o?.siparisId ? null : <AddIcon />
                  }
                  size="large"
                >
                  {selectedOrderId === o?.siparisId
                    ? "Detayları Gizle"
                    : "Detayları Göster"}
                </Button>
              </ListItem>
              <Collapse
                in={selectedOrderId === o?.siparisId}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {ayrintiData.map((detail, detailIndex) => (
                    <ListItem key={detailIndex}>
                      <ListItemText primary={`Ürün Adı: ${detail.urunAd}`} />
                      <ListItemText
                        primary={`Adet: ${detail.urunAdet}`}
                        style={{ marginLeft: "20px" }}
                      />
                      <ListItemText
                        primary={`Fiyat: ${detail.urunFiyat} TL`}
                        style={{ marginLeft: "20px", color: "#4caf50" }}
                      />
                      {detail.indKod && (
                        <ListItemText
                          primary={`İndirim: ${detail.indKod} `}
                          style={{
                            marginLeft: "20px",
                            color: "Red",
                          }}
                        />
                      )}
                      <ListItemText
                        primary={`Toplam Fiyat: ${detail.toplamTutar} TL`}
                        style={{ marginLeft: "20px", color: "#ff5722" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </>
  );
}
