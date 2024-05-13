import AdminSidebar from "@/components/AdminSidebar";
import MarkaOlustur from "@/components/UrunIslemler/MarkaOlustur";
import { useState, useEffect } from "react";
export default function index() {
  const [selectedCompo, setSelectedCompo] = useState("");
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-auto overflow-hidden h-screen gap-4">
        <div className="w-52">
          <AdminSidebar selectedCompo={setSelectedCompo} />
        </div>

        <div className="w-full overflow-y-auto">
          {selectedCompo === "Marka" && <MarkaOlustur />}
          {selectedCompo === "Urun" && <div></div>}
        </div>
      </div>
    </div>
  );
}
