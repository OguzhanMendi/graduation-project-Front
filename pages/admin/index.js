import AdminHeader from "@/components/AdminHeader";
import AdminSidebar from "@/components/AdminSidebar";

import UrunOlustur from "@/components/UrunIslemler/UrunOlustur";
import User from "@/components/User";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
export default function index() {
  const [selectedCompo, setSelectedCompo] = useState("");
  return (
    <div className="flex flex-col h-screen">
      <div className=" sticky top-0 z-50 bg-white">
        <AdminHeader />
        <Divider />
      </div>
      <div className="flex flex-auto overflow-hidden  gap-1">
        <div className="w-52">
          <AdminSidebar selectedCompo={setSelectedCompo} />
        </div>

        <div className="w-full ">
          {selectedCompo === "Urun" && <UrunOlustur />}
          {selectedCompo === "kullanici" && <User />}

          {/* kullanici */}
        </div>
      </div>
    </div>
  );
}
