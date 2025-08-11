import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Compass } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import BusinessDirectory from "./BusinessDirectory";
import PopularBusinesses from "@/components/PopularBusinesses";
import Footer from "@/components/Footer";
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

      {/* Start your online business Section */}
      <section className="w-full bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            {/* Illustration */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-purple-400/20"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-xs font-semibold">START</div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Start your online business today!
              </h2>
              
              <div className="space-y-3 text-gray-600 mb-6">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Set up your digital storefront in minutes</span>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Reach customers both online and offline with our platform</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started →
              </Button>
            </div>
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
              {[
                { id: 1, image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=310&h=160&fit=crop", link: "https://example.com/category1" },
                { id: 2, image: "https://images.unsplash.com/photo-1509316975850-ff9c5bee0cd9?w=310&h=160&fit=crop", link: "https://example.com/category2" },
                { id: 3, image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=310&h=160&fit=crop", link: "https://example.com/category3" },
                { id: 4, image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=310&h=160&fit=crop", link: "https://example.com/category4" },
                { id: 5, image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=310&h=160&fit=crop", link: "https://example.com/category5" },
                { id: 6, image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=310&h=160&fit=crop", link: "https://example.com/category6" },
                { id: 7, image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=310&h=160&fit=crop", link: "https://example.com/category7" },
                { id: 8, image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=310&h=160&fit=crop", link: "https://example.com/category8" },
                { id: 9, image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=310&h=160&fit=crop", link: "https://example.com/category9" },
                { id: 10, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=310&h=160&fit=crop", link: "https://example.com/category10" },
                { id: 11, image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=310&h=160&fit=crop", link: "https://example.com/category11" },
                { id: 12, image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=310&h=160&fit=crop", link: "https://example.com/category12" }
              ].map((category) => (
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
            
            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Popular Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {[
              { id: 1, image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=70&fit=crop", name: "Laptops", bgColor: "bg-pink-500", link: "#laptops" },
              { id: 2, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=320&h=70&fit=crop", name: "MacBooks", bgColor: "bg-pink-500", link: "#macbooks" },
              { id: 3, image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=320&h=70&fit=crop", name: "Gaming", bgColor: "bg-pink-500", link: "#gaming" },
              { id: 4, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=320&h=70&fit=crop", name: "Workstations", bgColor: "bg-gradient-to-r from-orange-400 to-orange-500", link: "#workstations" },
              { id: 5, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&h=70&fit=crop", name: "Desks", bgColor: "bg-gradient-to-r from-teal-400 to-orange-400", link: "#desks" },
              { id: 6, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=320&h=70&fit=crop", name: "Phones", bgColor: "bg-gradient-to-r from-teal-500 to-orange-500", link: "#phones" },
              { id: 7, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=320&h=70&fit=crop", name: "Tablets", bgColor: "bg-gradient-to-r from-orange-500 to-orange-600", link: "#tablets" },
              { id: 8, image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=320&h=70&fit=crop", name: "Audio", bgColor: "bg-gradient-to-r from-teal-400 to-orange-400", link: "#audio" },
              { id: 9, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=320&h=70&fit=crop", name: "Furniture", bgColor: "bg-gradient-to-r from-purple-500 to-purple-600", link: "#furniture" },
              { id: 10, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=320&h=70&fit=crop", name: "Appliances", bgColor: "bg-gradient-to-r from-purple-500 to-purple-600", link: "#appliances" },
              { id: 11, image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=320&h=70&fit=crop", name: "Home", bgColor: "bg-gradient-to-r from-purple-500 to-purple-600", link: "#home" },
              { id: 12, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=320&h=70&fit=crop", name: "Footwear", bgColor: "bg-gradient-to-r from-purple-500 to-purple-600", link: "#footwear" }
            ].map((product) => (
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
          
          {/* Full Width Banner */}
          <div className="mt-2.5">
            <a 
              href="#all-products" 
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group block w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-80"></div>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1280&h=35&fit=crop"
                alt="Full width banner"
                className="w-full h-[35px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <h3 className="text-sm font-semibold">See All Products</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Popular Businesses Section */}
      <PopularBusinesses />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Index;
