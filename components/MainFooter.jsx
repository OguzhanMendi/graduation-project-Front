import { Container, Grid, Typography, Link } from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function MainFooter() {
  return (
    <div className="bg-black text-white py-10">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Şirket
            </Typography>
            <ul className="list-none">
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Destek
            </Typography>
            <ul className="list-none">
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  Yardım Merkezi
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  SSS
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Yasal
            </Typography>
            <ul className="list-none">
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  Hizmet Şartları
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="mb-4">
              Bizi Takip Edin
            </Typography>
            <ul className="list-none flex space-x-4 items-center">
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  <FacebookIcon sx={{ fontSize: 30 }} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/oguzhanmendii/?igsh=MWtxbDM4cmgyNXJkZA%3D%3D&utm_source=qr"
                  color="inherit"
                  className="hover:text-gray-400"
                >
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" className="hover:text-gray-400">
                  <CreditCardIcon sx={{ fontSize: 30 }} />
                </Link>
              </li>
            </ul>
            <div className="mt-4"></div>
          </Grid>
        </Grid>
        <div className="text-center mt-8">
          <Typography variant="body2" color="textSecondary">
            © 2024 OZOS && MMS. Tüm hakları saklıdır.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ~ MUSTAFA OĞUZHAN MENDİ ~
          </Typography>
        </div>
      </Container>
    </div>
  );
}
// const MainFooter = () => {
//   return (

//   );
// };

// export default MainFooter;
