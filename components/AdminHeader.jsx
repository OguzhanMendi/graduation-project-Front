import Image from "next/image";

import Logo from "@/public/ozos.png";

export default function AdminHeader() {
  //

  return (
    <>
      <div className="w-full  flex  justify-center gap-10 p-1  items-center ">
        <div>
          <Image src={Logo} width={80} className="rounded-2xl" />
        </div>
      </div>
    </>
  );
}
