import Image from "next/image";
import { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Markalar() {
  const brands = [
    { name: "Puma", logo: "/puma.png" },
    { name: "Adidas", logo: "/Adidas.png" },
    { name: "Nike", logo: "/nikee.jpg" },
    { name: "Apple", logo: "/iphone.jpg" },
    { name: "Samsung", logo: "/samsung logo.png" },
    { name: "Vestel", logo: "/vestel.png" },
    { name: "Bosch", logo: "/bosch.png" },
    { name: "Arçelik", logo: "/arcelik.png" },
    { name: "xiaomi", logo: "/xiaomi.jpg" },
    { name: "tpLink", logo: "/tp-link.jpg" },
    { name: "microsfot", logo: "/micro.png" },
    { name: "sonny", logo: "/sony.jpg" },
    { name: "tefal", logo: "/tefal.jpg" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateContainerWidth = () => {
      const container = document.getElementById("brandsContainer");
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };
    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById("brandsContainer");
    if (container) {
      if (scrollPosition === 0) {
        container.scrollLeft = container.scrollWidth;
        setScrollPosition(container.scrollLeft);
      } else {
        container.scrollLeft -= containerWidth / 3;
        setScrollPosition(container.scrollLeft);
      }
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("brandsContainer");
    if (container) {
      if (scrollPosition === container.scrollWidth - containerWidth) {
        container.scrollLeft = 0;
        setScrollPosition(0);
      } else {
        container.scrollLeft += containerWidth / 3;
        setScrollPosition(container.scrollLeft);
      }
    }
  };

  return (
    <div className="relative mx-auto max-w-screen-lg">
      {scrollPosition > 0 && (
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
          onClick={scrollLeft}
        >
          <KeyboardArrowLeftIcon sx={{ fontSize: 32 }} />
        </div>
      )}
      <div
        id="brandsContainer"
        className="flex  gap-6 items-center overflow-x-hidden py-2 pl-4 pr-8"
      >
        {brands.map((brand, index) => (
          <a
            key={index}
            // Burda şu düzeltilicek şöyle yap.
            className="flex-none hover:text-blue-900 hover:cursor-pointer space-y-1"
          >
            <div className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-full bg-white shadow-md">
              <Image
                className="object-contain"
                width={50}
                height={50}
                src={brand.logo}
                alt={`${brand.name} logo`}
              />
            </div>
            <span className="block text-center text-sm">{brand.name}</span>
          </a>
        ))}
      </div>
      {scrollPosition < containerWidth - 1 && (
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
          onClick={scrollRight}
        >
          <KeyboardArrowRightIcon sx={{ fontSize: 32 }} />
        </div>
      )}
    </div>
  );
}
