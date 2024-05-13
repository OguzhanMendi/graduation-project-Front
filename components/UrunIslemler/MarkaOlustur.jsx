import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import MarkaListe from "./MakraListe";
import Image from "next/image";

export default function MarkaOlustur() {
  ///
  const [markaAdi, setMarkaAdi] = useState("");
  const [dosya, setDosya] = useState(null);

  const handleMarkaAdiChange = (event) => {
    setMarkaAdi(event.target.value);
  };

  const handleDosyaSecimi = (event) => {
    const dosya = event.target.files[0];
    setDosya(dosya);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", dosya);
    formData.append("markaAdi", markaAdi);
    formData.append("imgUrl", "111");

    try {
      const response = await axios.post(
        `https://localhost:7257/Urun/MarkaCreate?markaAd=${markaAdi}`,
        formData,
        {
          headers: { Accept: "*/*", "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        setMarkaAdi("");
        setDosya(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Marka Oluştur</h2>
        <div className="mb-4">
          <TextField
            label="Marka Adı"
            variant="outlined"
            fullWidth
            value={markaAdi}
            onChange={handleMarkaAdiChange}
            size="small"
          />
        </div>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleDosyaSecimi}
            className="hidden"
            id="dosyaSec"
          />
          <label htmlFor="dosyaSec">
            <Button
              variant="outlined"
              component="span"
              color="primary"
              size="large"
              fullWidth
            >
              Resim Seç
            </Button>
          </label>
          {dosya && <span className="ml-2">{dosya.name}</span>}
        </div>
        <Button variant="contained" color="primary" type="submit">
          Oluştur
        </Button>
        <div>
          <h2 className="text-xl font-semibold items-center p-1">
            Marka Listesi
          </h2>
          <MarkaListe /> {/* MarkaListesi bileşeni burada çağrılıyor */}
        </div>
      </div>
    </form>
  );
}
