import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function AdminSidebar({ selectedCompo }) {
  const [isOpen, setIsOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <div className="flex">
      <div
        className={`bg-gray-800 text-white min-h-screen transition-all duration-300 ease-in-out ${
          mobileOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="relative">
          <button className="p-4 focus:outline-none" onClick={toggleMobileMenu}>
            {mobileOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
        <ul className="mt-4">
          <li className="group">
            <div
              className="flex items-center py-2 px-4 hover:bg-gray-700 rounded-xl cursor-pointer"
              onClick={toggleMenu}
            >
              {mobileOpen ? <span>İŞLEMLER</span> : <MenuBookIcon />}
              <div className="ml-auto">
                {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </div>
            </div>
            {isOpen && (
              <ul className="pl-4">
                <li
                  className="py-2 hover:bg-gray-600 rounded-md"
                  onClick={() => {
                    selectedCompo("Urun");
                  }}
                >
                  Ürün Oluştur
                </li>

                <li
                  className="py-2 hover:bg-gray-600 rounded-md"
                  onClick={() => {
                    selectedCompo("kullanici");
                  }}
                >
                  Kullanıcılar
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      {mobileOpen && (
        <div
          className="flex-grow bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
}
