import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ShoppingHome = () => {
  const slides = [bannerOne, bannerTwo, bannerThree];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides?.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
        <Button className="shadow absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80" size="icon">
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button className="shadow absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80" size="icon">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ShoppingHome;
