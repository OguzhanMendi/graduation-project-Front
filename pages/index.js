import Header from "@/components/Header";
import Markalar from "@/components/Markalar";
import Textbar from "@/components/Textbar";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="">
          <Header />
        </div>
        <div>
          <Divider />
        </div>
        <div className="flex justify-center">
          <Markalar />
        </div>
        <div className="flex justify-center">
          <Textbar />
        </div>
      </div>
    </>
  );
}
