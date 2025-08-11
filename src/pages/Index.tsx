import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Compass } from "lucide-react";
// import { Navbar } from "@/components/Navbar";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("product");

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      
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

          {/* Simple Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Search for businesses..."
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

      {/* Simple Content Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Welcome to Our Platform</h2>
          <p className="text-center text-muted-foreground">
            Find the best businesses in your area with both online and offline presence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;