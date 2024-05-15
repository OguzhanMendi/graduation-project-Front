import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Divider } from "@mui/material";

export default function Filter() {
  return (
    <div className="flex gap-3 p-3 justify-center ">
      <div className="overflow-y-auto">
        <div className="flex flex-col  gap-2  ">
          <div className="flex flex-col p-3 bg-gray-100 shadow-md overflow-y-auto max-h-[400px] ">
            <span className="font-semibold ">Markalar</span>
            <FormControlLabel control={<Checkbox />} label="Puma" />
            <FormControlLabel control={<Checkbox />} label="Adidas" />
            <FormControlLabel control={<Checkbox />} label="Nike" />
            <FormControlLabel control={<Checkbox />} label="Apple" />
            <FormControlLabel control={<Checkbox />} label="Samsung" />
            <FormControlLabel control={<Checkbox />} label="Vestel" />
            <FormControlLabel control={<Checkbox />} label="Bosch" />
            <FormControlLabel control={<Checkbox />} label="Arçelik" />
            <FormControlLabel control={<Checkbox />} label="xiaomi" />
            <FormControlLabel control={<Checkbox />} label="tpLink" />
            <FormControlLabel control={<Checkbox />} label="microsfot" />
            <FormControlLabel control={<Checkbox />} label="sonny" />
            <FormControlLabel control={<Checkbox />} label="tefal" />
          </div>
          <Divider />
          <div className="flex flex-col p-3 bg-gray-100 shadow-md overflow-y-auto max-h-[200px]">
            <span className="font-semibold">Kategoriler</span>
            <FormControlLabel control={<Checkbox />} label="Giyim" />
            <FormControlLabel control={<Checkbox />} label="Ayakkabı" />
            <FormControlLabel control={<Checkbox />} label="Akıllı Telefon" />
            <FormControlLabel control={<Checkbox />} label="Elektronik" />
          </div>
          <Divider />
          <div className="flex flex-col p-3 bg-gray-100 shadow-md overflow-y-auto max-h-[300px]">
            <span className="font-semibold">Beden</span>
            <FormControlLabel control={<Checkbox />} label="XL" />
            <FormControlLabel control={<Checkbox />} label="L" />
            <FormControlLabel control={<Checkbox />} label="M" />
            <FormControlLabel control={<Checkbox />} label="S" />
            <FormControlLabel control={<Checkbox />} label="XS" />
            <FormControlLabel control={<Checkbox />} label="45" />
            <FormControlLabel control={<Checkbox />} label="44" />
            <FormControlLabel control={<Checkbox />} label="43" />
            <FormControlLabel control={<Checkbox />} label="41" />
            <FormControlLabel control={<Checkbox />} label="40" />
            <FormControlLabel control={<Checkbox />} label="39" />
            <FormControlLabel control={<Checkbox />} label="38" />
            <FormControlLabel control={<Checkbox />} label="37" />
            <FormControlLabel control={<Checkbox />} label="36" />
            <FormControlLabel control={<Checkbox />} label="35" />
          </div>
        </div>
      </div>
    </div>
  );
}
