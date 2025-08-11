import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Bookmark, Check, X, BadgeCheck, MapPin } from 'lucide-react';

interface Business {
  id: number;
  image: string;
  name: string;
  location: string;
  rating: number;
  isVerified: boolean;
  onlineShopUrl: string;
  facebookUrl: string;
  cashOnDelivery: boolean;
  pickupInStore: boolean;
  bankDigitalPayments: boolean;
  nextDayDelivery: boolean;
}

const PopularBusinesses = () => {
  const businesses: Business[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      name: "Five times Tech solution ProTech solution ProTech solution Pro",
      location: "Central District",
      rating: 5,
      isVerified: true,
      onlineShopUrl: "#shop1",
      facebookUrl: "#facebook1",
      cashOnDelivery: true,
      pickupInStore: false,
      bankDigitalPayments: true,
      nextDayDelivery: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      name: "Code Masters",
      location: "Tsim Sha Tsui",
      rating: 4,
      isVerified: true,
      onlineShopUrl: "#shop2",
      facebookUrl: "#facebook2",
      cashOnDelivery: false,
      pickupInStore: true,
      bankDigitalPayments: true,
      nextDayDelivery: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
      name: "Digital Workspace",
      location: "Wan Chai",
      rating: 5,
      isVerified: false,
      onlineShopUrl: "#shop3",
      facebookUrl: "#facebook3",
      cashOnDelivery: true,
      pickupInStore: false,
      bankDigitalPayments: false,
      nextDayDelivery: false
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Popular Businesses</h2>
        
        <div className="flex flex-wrap justify-center">
          {businesses.map((business) => (
            <Card key={business.id} className="w-[320px] h-[455px] flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 mx-[5px] md:mx-[10px] mb-4">
              <div className="relative">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-[320px] h-[220px] object-cover rounded-t-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 p-1 h-auto w-auto bg-white/80 hover:bg-white"
                >
                  <Bookmark className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
              
              <CardContent className="flex-1 p-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          className={`w-3 h-3 ${
                            index < business.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">From $5</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1592659762303-90081d34b277?w=20&h=20&fit=crop" 
                        alt="Business logo" 
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      {business.isVerified && (
                        <BadgeCheck className="w-4 h-4 text-white absolute -top-1 -right-1 rounded-full bg-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-foreground leading-tight line-clamp-2">
                        {business.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-500" />
                    {business.location}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${business.cashOnDelivery ? 'bg-green-500' : 'bg-gray-400'}`}>
                        {business.cashOnDelivery ? 
                          <Check className="w-2 h-2 text-white" /> : 
                          <X className="w-2 h-2 text-white" />
                        }
                      </div>
                      <span className="text-xs text-muted-foreground">Cash on Delivery</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${business.pickupInStore ? 'bg-green-500' : 'bg-gray-400'}`}>
                        {business.pickupInStore ? 
                          <Check className="w-2 h-2 text-white" /> : 
                          <X className="w-2 h-2 text-white" />
                        }
                      </div>
                      <span className="text-xs text-muted-foreground">Pickup In-Store</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${business.bankDigitalPayments ? 'bg-green-500' : 'bg-gray-400'}`}>
                        {business.bankDigitalPayments ? 
                          <Check className="w-2 h-2 text-white" /> : 
                          <X className="w-2 h-2 text-white" />
                        }
                      </div>
                      <span className="text-xs text-muted-foreground">Digital Payments</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${business.nextDayDelivery ? 'bg-green-500' : 'bg-gray-400'}`}>
                        {business.nextDayDelivery ? 
                          <Check className="w-2 h-2 text-white" /> : 
                          <X className="w-2 h-2 text-white" />
                        }
                      </div>
                      <span className="text-xs text-muted-foreground">Next-Day Delivery</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-2">
                  <Button 
                    className="w-full h-8 text-xs"
                    onClick={() => window.open(business.onlineShopUrl, '_blank')}
                  >
                    Go To Online Shop
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-8 text-xs"
                    onClick={() => window.open(business.facebookUrl, '_blank')}
                  >
                    See Products Catalog
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBusinesses;