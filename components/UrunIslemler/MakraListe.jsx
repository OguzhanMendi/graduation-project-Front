import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MarkaListe() {
  const [markalar, setMarkalar] = useState();
  const markaListService = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7257/Urun/markalar",
        null,
        {
          headers: {
            Accept: "*/*",
            headers: { Accept: "*/*", "Content-Type": "application/json" },
          },
        }
      );

      if (response.status === 200) {
        setMarkalar(response.data);
        console.log(markalar);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    markaListService();
  }, []);
  return (
    <Grid container spacing={1}>
      {markalar?.map((marka, index) => (
        <Grid item xs={5} sm={1} md={2} key={index}>
          <Card className="rounded-md">
            <CardMedia
              component="img"
              width={80}
              height={80}
              src={`https://localhost:7257/Urun/${marka.imgUrl}`}
              alt={marka?.markaAd}
            />

            <CardContent>
              <Typography variant="h6">{marka?.markaAd}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
