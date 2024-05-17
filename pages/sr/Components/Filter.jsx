import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";
import { useState, useEffect, useRef } from "react";

export default function Filter({ seciliFiltreler, setSeciliFiltreler }) {
  const filtreSecimDegistir = (e) => {
    const { checked, name } = e.target;
    const labelText = e.target.labels[0].innerText;

    setSeciliFiltreler((veri) => {
      if (checked) {
        return [...veri, labelText];
      } else {
        return veri.filter((etiket) => etiket !== labelText);
      }
    });
  };
  return (
    <div className="flex gap-3 p-3 justify-center ">
      <div className="overflow-y-auto ">
        <div className="flex flex-col  gap-2  ">
          <div className="flex flex-col p-3 bg-gray-100 shadow-md overflow-y-auto max-h-[400px] ">
            <span className="font-semibold ">Markalar</span>
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Puma"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Adidas"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Nike"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Apple"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Samsung"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Vestel"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Bosch"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Arçelik"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="xiaomi"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="tpLink"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="microsfot"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="sonny"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="tefal"
            />
          </div>
          <Divider />
          <div className="flex flex-col p-3 bg-gray-100 shadow-md overflow-y-auto max-h-[200px]">
            <span className="font-semibold">Kategoriler</span>
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Giyim"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Ayakkabı"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Akıllı Telefon"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="Elektronik"
            />
          </div>
          <Divider />
          <div className="flex flex-col p-3 bg-gray-100 shadow-md overflow-y-auto max-h-[300px]">
            <span className="font-semibold">Beden</span>
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="XL"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="L"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="M"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="S"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="XS"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="45"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="44"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="43"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="41"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="40"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="39"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="38"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="37"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="36"
            />
            <FormControlLabel
              control={<Checkbox />}
              onChange={(e) => {
                filtreSecimDegistir(e);
              }}
              label="35"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
