import {
  TextField,
  Autocomplete,
  ButtonGroup,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

export default function UrunOlustur() {
  const [kategori, setKategori] = useState("");
  const [updatekategori, setUpdateKategori] = useState("");

  const [marka, setMarka] = useState("");
  const [secilenOzellik, setSecilenOzellik] = useState();
  const [updateSecilenOzellik, setUpdateSecilenOzellik] = useState();

  const [dosya, setDosya] = useState(null);
  const [urunler, setUrunler] = useState([]);
  const [open, setOpen] = useState(false);

  const dialogAc = () => {
    setOpen(true);
  };

  const dialogKapat = () => {
    setOpen(false);
  };

  const handleDosyaSecimi = (event) => {
    const dosya = event.target.files[0];
    setDosya(dosya);
  };
  const ozellikSecClick = (ozellik) => {
    setSecilenOzellik(ozellik);
    setForm({ ...form, urunozellik: ozellik });
  };
  const UpdateozellikSecClick = (ozellik) => {
    setUpdateSecilenOzellik(ozellik);
    setUpdateForm({ ...updateForm, urunozellik: ozellik });
  };
  const kategoriler = [
    {
      id: 1,
      ad: "Giyim",
      özellik: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 2,
      ad: "Ayakkabı",
      özellik: [
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
      ],
    },
    {
      id: 3,
      ad: "Akıllı Telefon",
      özellik: ["16 GB", "32 GB", "64 GB", "128 GB", "256 GB", "512 GB"],
    },
    {
      id: 4,
      ad: "Elektronik",
      özellik: ["Elektronik"],
    },
  ];

  const Markalar = [
    { id: 1, name: "Puma" },
    { id: 2, name: "Adidas" },
    { id: 3, name: "Nike" },
    { id: 4, name: "Apple" },
    { id: 5, name: "Samsung" },
    { id: 6, name: "Vestel" },
    { id: 7, name: "Bosch" },
    { id: 8, name: "Arçelik" },
    { id: 9, name: "xiaomi" },
    { id: 10, name: "tpLink" },
    { id: 11, name: "microsfot" },
    { id: 12, name: "sonny" },
    { id: 13, name: "tefal" },
  ];
  const temizleForm = () => {
    setForm({
      urunAd: "",
      urunAciklama: "",
      urunMarka: "",
      urunKategori: "",
      urunozellik: "",
      urunAdet: 0,
      urunFiyat: 0,
      urunKdv: 0,
      image: "",
    });
    setSecilenOzellik("");
    setMarka([{}]); // Marka'yı sıfırla
    setKategori([{}]); // Kategori'yi sıfırla

    setDosya(null);
  };

  ///
  const [form, setForm] = useState({
    urunAd: "",
    urunAciklama: "",
    urunMarka: "",
    urunKategori: "",
    urunozellik: "",
    urunAdet: 0,
    urunFiyat: 0,
    urunKdv: 0,
    image: "",
  });
  const [updateForm, setUpdateForm] = useState({
    id: 0,
    urunAd: "",
    urunAciklama: "",
    urunMarka: "",
    urunKategori: "",
    urunozellik: "",
    urunAdet: 0,
    urunFiyat: 0,
    urunKdv: 0,
    image: "",
  });

  const urunOlusturService = async () => {
    try {
      debugger;
      const formData = new FormData();
      formData.append("urunAd", form.urunAd);
      formData.append("urunAciklama", form.urunAciklama);
      formData.append("urunMarka", marka);
      formData.append("urunKategori", kategori);
      formData.append("urunozellik", form.urunozellik);
      formData.append("urunAdet", form.urunAdet);
      formData.append("urunFiyat", form.urunFiyat);
      formData.append("urunKdv", form.urunKdv);
      formData.append("image", dosya);

      const response = await axios.post(
        `https://localhost:7257/Urun/urunCreate?urunAd=${
          formData.urunAd
        }&urunAciklama=${formData.urunAciklama}&urunMarka=${
          formData.urunMarka
        }&urunKategori=${formData.urunKategori}&urunozellik=${
          formData.urunozellik
        }&urunAdet=${formData.urunAdet}&urunFiyat=${
          formData.urunFiyat
        }&urunKdv=${formData.urunKdv}&imgUrl=${"1"}&aktif=${true}`,
        formData,
        {
          headers: {
            headers: { Accept: "*/*", "Content-Type": "multipart/form-data" },
          },
        }
      );

      if (response.status === 200) {
        temizleForm();
        urunList();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const urunUpdateService = async (id) => {
    try {
      debugger;
      const formData = new FormData();
      formData.append("id", updateForm.id);
      formData.append("urunAd", updateForm.urunAd);
      formData.append("urunAciklama", updateForm.urunAciklama);
      formData.append("urunMarka", marka);
      formData.append("urunKategori", updatekategori);
      formData.append("urunozellik", updateForm.urunozellik);
      formData.append("urunAdet", updateForm.urunAdet);
      formData.append("urunFiyat", updateForm.urunFiyat);
      formData.append("urunKdv", updateForm.urunKdv);
      formData.append("image", dosya);

      const response = await axios.post(
        `https://localhost:7257/Urun/urunUpdate?urunAd=${
          formData.urunAd
        }&urunAciklama=${formData.urunAciklama}&urunMarka=${
          formData.urunMarka
        }&urunKategori=${formData.urunKategori}&urunozellik=${
          formData.urunozellik
        }&urunAdet=${formData.urunAdet}&urunFiyat=${
          formData.urunFiyat
        }&urunKdv=${formData.urunKdv}&imgUrl=${"1"}&aktif=${true}`,
        formData,
        {
          headers: {
            headers: { Accept: "*/*", "Content-Type": "multipart/form-data" },
          },
        }
      );

      if (response.status === 200) {
        temizleForm();
        urunList();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const urunList = async () => {
    const response = await axios.post(
      "https://localhost:7257/Urun/urunler",
      null,
      {
        headers: {
          headers: { Accept: "*/*", "Content-Type": "appilcation/json" },
        },
      }
    );

    if (response.status === 200) {
      setUrunler(response?.data);
      setUpdateKategori(response.data.urunMarka);
    }
  };

  const urunBulService = async (id) => {
    debugger;
    try {
      const response = await axios.get(
        `https://localhost:7257/Urun/urunBul?id=${id}`,
        {
          headers: {
            headers: { Accept: "*/*", "Content-Type": "appilcation/json" },
          },
        }
      );

      if (response.status === 200) {
        setUpdateForm(response.data);
        setUpdateSecilenOzellik(response?.data?.secilenozellik);
        setUpdateKategori(response?.data?.urunKategori);
        setMarka(response?.data?.urunMarka);
      }
    } catch (err) {}
  };

  const urunSilService = async (id) => {
    debugger;
    try {
      const response = await axios.post(
        `https://localhost:7257/Urun/urunSil?id=${id}`,
        {
          headers: {
            headers: { Accept: "*/*", "Content-Type": "appilcation/json" },
          },
        }
      );

      if (response.status === 200) {
        urunList();
      }
    } catch (err) {}
  };

  useEffect(() => {
    urunList();
  }, []);

  return (
    <div className=" h-full flex  gap-2 p-1 ">
      <Dialog open={open} onClose={dialogKapat} fullWidth>
        <DialogTitle
          className="text-center"
          style={{ background: "#2196f3", color: "#fff" }}
        >
          Ürün Güncelle
        </DialogTitle>

        <div className="flex flex-col gap-3 p-3 ">
          <TextField
            id="outlined-basic"
            label="Ürün Adı"
            variant="outlined"
            className="w-full"
            value={updateForm.urunAd}
            onChange={(e) => {
              setUpdateForm({ ...updateForm, urunAd: e.target.value });
            }}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Ürün Açıklaması"
            multiline
            maxRows={5}
            variant="outlined"
            className="w-full"
            value={updateForm.urunAciklama}
            onChange={(e) => {
              setUpdateForm({ ...updateForm, urunAciklama: e.target.value });
            }}
          />
          <div className="w-full">
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
          <TextField
            id="outlined-number"
            label="Adet"
            type="number"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            className="w-full"
            value={updateForm.urunAdet}
            onChange={(e) => {
              setUpdateForm({ ...updateForm, urunAdet: e.target.value });
            }}
          />
          <div className="flex gap-3">
            <TextField
              id="outlined-number"
              label="Ürün Fiyatı"
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              className="w-full"
              value={updateForm.urunFiyat}
              onChange={(e) => {
                setUpdateForm({ ...updateForm, urunFiyat: e.target.value });
              }}
            />
            <TextField
              id="outlined-number"
              label="Ürün KDV"
              type="number"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              className="w-full"
              value={updateForm.urunKdv}
              onChange={(e) => {
                setUpdateForm({ ...updateForm, urunKdv: e.target.value });
              }}
            />
          </div>
          <Autocomplete
            id="combo-box-demo"
            options={Markalar}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Marka" variant="outlined" />
            )}
            className="w-full"
            value={marka?.name}
            onChange={(e, selectedOption) => {
              if (selectedOption) {
                setMarka(selectedOption.name);
              } else {
                setMarka(null); // Seçili bir kategori yoksa null olarak ayarlayın
              }
            }}
          />

          <Autocomplete
            id="combo-box-demo"
            options={kategoriler}
            getOptionLabel={(option) => option.ad}
            renderInput={(params) => (
              <TextField {...params} label="Kategori" variant="outlined" />
            )}
            className="w-full"
            value={updatekategori?.ad}
            onChange={(e, selectedOption) => {
              if (selectedOption) {
                setUpdateKategori(selectedOption.ad);
              } else {
                setUpdateKategori(null); // Seçili bir kategori yoksa null olarak ayarlayın
              }
            }}
          />
          {updatekategori && (
            <div className="w-full mt-3">
              <h3 className="text-lg font-semibold mb-2">
                Özellik Seçin: {updateSecilenOzellik}
              </h3>
              <ButtonGroup
                variant="contained"
                className="flex flex-wrap gap-3"
                style={{ overflow: "auto", whiteSpace: "nowrap" }}
              >
                {kategoriler
                  .find((a) => a.ad === updatekategori)
                  ?.özellik?.map((ozellik) => (
                    <Button
                      key={ozellik}
                      className={` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => {
                        UpdateozellikSecClick(ozellik);
                      }}
                    >
                      {ozellik}
                    </Button>
                  ))}
              </ButtonGroup>
            </div>
          )}
        </div>

        <DialogContent style={{ background: "#f0f0f0" }}>
          <div className="flex flex-col gap-3 p-3"></div>
        </DialogContent>
        <DialogActions style={{ background: "#f0f0f0" }}>
          <Button variant="contained" color="error" onClick={dialogKapat}>
            Kapat
          </Button>
          <Button
            variant="contained"
            style={{ background: "#4caf50", color: "#fff" }}
            onClick={() => {
              urunUpdateService(updateForm.id);
              dialogKapat();
            }}
          >
            Güncelle
          </Button>
        </DialogActions>
      </Dialog>
      <div className="w-1/5 flex flex-col items-center gap-3 p-3 bg-gray-100 border rounded-lg shadow-md  ">
        <h1 className="font-semibold animate-bounce">ÜRÜN OLUŞTURMA FORMU</h1>

        <TextField
          id="outlined-basic"
          label="Ürün Adı"
          variant="outlined"
          className="w-full"
          value={form.urunAd}
          onChange={(e) => {
            setForm({ ...form, urunAd: e.target.value });
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Ürün Açıklaması"
          multiline
          maxRows={5}
          variant="outlined"
          className="w-full"
          value={form.urunAciklama}
          onChange={(e) => {
            setForm({ ...form, urunAciklama: e.target.value });
          }}
        />
        <div className="w-full">
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
        <TextField
          id="outlined-number"
          label="Adet"
          type="number"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          className="w-full"
          value={form.urunAdet}
          onChange={(e) => {
            setForm({ ...form, urunAdet: e.target.value });
          }}
        />
        <div className="flex gap-3">
          <TextField
            id="outlined-number"
            label="Ürün Fiyatı"
            type="number"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            className="w-full"
            value={form.urunFiyat}
            onChange={(e) => {
              setForm({ ...form, urunFiyat: e.target.value });
            }}
          />
          <TextField
            id="outlined-number"
            label="Ürün KDV"
            type="number"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            className="w-full"
            value={form.urunKdv}
            onChange={(e) => {
              setForm({ ...form, urunKdv: e.target.value });
            }}
          />
        </div>
        <Autocomplete
          id="combo-box-demo"
          options={Markalar}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} label="Marka" variant="outlined" />
          )}
          className="w-full"
          value={marka?.name}
          onChange={(e, selectedOption) => {
            if (selectedOption) {
              setMarka(selectedOption.name);
            } else {
              setMarka(null); // Seçili bir kategori yoksa null olarak ayarlayın
            }
          }}
        />

        <Autocomplete
          id="combo-box-demo"
          options={kategoriler}
          getOptionLabel={(option) => option.ad}
          renderInput={(params) => (
            <TextField {...params} label="Kategori" variant="outlined" />
          )}
          className="w-full"
          value={kategori?.ad}
          onChange={(e, selectedOption) => {
            if (selectedOption) {
              setKategori(selectedOption.ad);
            } else {
              setKategori(null); // Seçili bir kategori yoksa null olarak ayarlayın
            }
          }}
        />
        {kategori && (
          <div className="w-full mt-3">
            <h3 className="text-lg font-semibold mb-2">
              Özellik Seçin: {secilenOzellik}
            </h3>
            <ButtonGroup
              variant="contained"
              className="flex flex-wrap gap-3"
              style={{ overflow: "auto", whiteSpace: "nowrap" }}
            >
              {kategoriler
                .find((a) => a.ad === kategori)
                ?.özellik?.map((ozellik) => (
                  <Button
                    key={ozellik}
                    className={` hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => {
                      ozellikSecClick(ozellik);
                    }}
                  >
                    {ozellik}
                  </Button>
                ))}
            </ButtonGroup>
          </div>
        )}

        <Button
          sx={{
            bgcolor: "black",
            "&:hover": {
              bgcolor: "black",
            },
            marginTop: "2rem",
          }}
          variant="contained"
          fullWidth
          size="large"
          onClick={() => {
            urunOlusturService();
          }}
        >
          Oluştur
        </Button>
      </div>
      <div className="bg-gray-200 border rounded-lg shadow-md  overflow-y-auto ">
        <table className="divide-y  divide-gray-200">
          <thead className="sticky top-0 bg-gray-50 z-10">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Resim
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ürün Adı
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Açıklama
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Marka
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Kategori
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Özellik
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Adet
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Fiyat
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                KDV
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {urunler?.map((urun, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    className="w-14 rounded-xl"
                    src={`https://localhost:7257/Urun/${urun.imgUrl}`}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{urun.urunAd}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {urun.urunAciklama.slice(0, 10)}
                  <a href="#">....</a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {urun.urunMarka}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {urun.urunKategori}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {urun.urunozellik}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{urun.urunAdet}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {urun.urunFiyat}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{urun.urunKdv}</td>

                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-3">
                    <Button
                      variant="contained"
                      startIcon={<UpdateIcon />}
                      onClick={() => {
                        dialogAc();
                        urunBulService(urun.id);
                      }}
                    >
                      Güncelle
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        urunSilService(urun.id);
                      }}
                    >
                      SİL
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
