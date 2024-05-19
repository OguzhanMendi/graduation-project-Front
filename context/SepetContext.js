import { createContext, useState, useContext } from "react";

const SepetContext = createContext();

export const SepetProvider = ({ children }) => {
  const [toplamAdet, setToplamAdet] = useState(0);

  const toplamAdetGuncelle = () => {
    const sepet = JSON.parse(localStorage.getItem("sepet")) || {};
    let toplam = 0;
    for (let urunId in sepet) {
      toplam += sepet[urunId].urunAdet;
    }
    setToplamAdet(toplam);
  };

  return (
    <SepetContext.Provider value={{ toplamAdet, toplamAdetGuncelle }}>
      {children}
    </SepetContext.Provider>
  );
};

export const useSepet = () => useContext(SepetContext);
