import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner-1.webp";
import bannerTwo from "../../assets/banner-2.webp";
import bannerThree from "../../assets/banner-3.webp";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { filterOptions } from "@/config";
import { Card, CardContent } from "@/components/ui/card";

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
        <Button
          className="shadow absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
          size="icon"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          className="shadow absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
          size="icon"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filterOptions?.category?.map((categoryItem) => (
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold"> {categoryItem?.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingHome;
