import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Compass } from "lucide-react";
import { Navbar } from "@/components/Navbar";
// import PopularBusinesses from "@/components/PopularBusinesses";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("product");
  
  const categories = [
    { value: "product", label: "Product" },
    { value: "service", label: "Service" },
    { value: "business", label: "Business" }
  ];

  const categoryImages = [
    { id: 1, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=310&h=160&fit=crop", link: "https://example.com/category1" },
    { id: 2, image: "https://images.unsplash.com/photo-1509316975850-ff9c5bee0cd9?w=310&h=160&fit=crop", link: "https://example.com/category2" },
    { id: 3, image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=310&h=160&fit=crop", link: "https://example.com/category3" },
    { id: 4, image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=310&h=160&fit=crop", link: "https://example.com/category4" },
    { id: 5, image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=310&h=160&fit=crop", link: "https://example.com/category5" },
    { id: 6, image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=310&h=160&fit=crop", link: "https://example.com/category6" }
  ];

  const productCategories = [
    { id: 1, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=70&fit=crop", name: "Laptops", bgColor: "bg-pink-500", link: "#laptops" },
    { id: 2, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=320&h=70&fit=crop", name: "MacBooks", bgColor: "bg-pink-500", link: "#macbooks" },
    { id: 3, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=320&h=70&fit=crop", name: "Gaming", bgColor: "bg-pink-500", link: "#gaming" },
    { id: 4, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=320&h=70&fit=crop", name: "Workstations", bgColor: "bg-gradient-to-r from-orange-400 to-orange-500", link: "#workstations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            Exclusively businesses with both online and in-store sales
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-1">
              <ShoppingBag className="h-5 w-5" />
              <span>Start Shopping</span>
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-4 py-2 rounded-lg font-medium flex items-center space-x-1">
              <Compass className="h-5 w-5" />
              <span>Explore Shopping</span>
            </Button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2">
            <div className="bg-yellow-400 rounded-md overflow-hidden">
              <Swiper
                direction="vertical"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-10"
                modules={[Autoplay]}
              >
                {categories.map((category) => (
                  <SwiperSlide key={category.value} className="flex items-center justify-center">
                     <button
                       onClick={() => setSelectedCategory(category.value)}
                       className={`w-full h-full text-black font-medium text-sm flex items-center justify-center px-3 ${
                         selectedCategory === category.value ? 'bg-yellow-500' : 'bg-yellow-400'
                       }`}
                     >
                      {category.label}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            <Input
              type="text"
              placeholder="iPhone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border-0 text-gray-600 placeholder-gray-400 focus-visible:ring-0"
            />
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Popular Categories</h2>
          
          <div className="relative group">
            <Swiper
              spaceBetween={15}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              allowTouchMove={true}
              grabCursor={true}
              touchRatio={1}
              modules={[Autoplay, Navigation]}
              className="popular-categories-swiper !overflow-visible"
            >
              {categoryImages.map((category) => (
                <SwiperSlide key={category.id} className="!w-[310px]">
                  <a 
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  >
                    <img
                      src={category.image}
                      alt={`Category ${category.id}`}
                      className="w-[310px] h-[160px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Popular Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {productCategories.map((product) => (
              <a 
                key={product.id} 
                href={product.link}
                className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group block hover:scale-105"
              >
                <div className={`absolute inset-0 ${product.bgColor} opacity-80`}></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[320px] h-[70px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-between p-3 text-white">
                  <div>
                    <h3 className="text-sm font-semibold">{product.name}.</h3>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="underline">See Shops</span>
                    <span className="ml-1">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Businesses Section */}
      {/* <PopularBusinesses /> */}
    </div>
  );
};

export default Index;