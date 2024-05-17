import { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import Header from "@/components/Header";

export default function OrderHistoryPage() {
  // Örnek sipariş verileri
  const [orders, setOrders] = useState([]);

  // Örnek siparişleri getiren fonksiyon
  const fetchOrders = async () => {
    // Siparişleri API'den almak için gerekli kodu buraya ekleyin
    // Örnek olarak, statik sipariş verilerini kullanıyoruz
    const response = await fetch("https://api.example.com/orders");
    const data = await response.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fakeOrders = [
    {
      id: 1,
      orderNumber: "ORD123456",
      date: "2024-05-17",
      totalAmount: 150.0,
    },
    {
      id: 2,
      orderNumber: "ORD789012",
      date: "2024-05-15",
      totalAmount: 250.0,
    },
    {
      id: 3,
      orderNumber: "ORD345678",
      date: "2024-05-10",
      totalAmount: 180.0,
    },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto my-8">
        <Typography variant="h4" component="h1" gutterBottom>
          Geçmiş Siparişlerim
        </Typography>
        <List>
          {fakeOrders.map((order, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText
                  primary={`Sipariş Numarası: ${order.orderNumber}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Tarih: ${order.date}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Toplam Tutar: ${order.totalAmount}`} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </>
  );
}
