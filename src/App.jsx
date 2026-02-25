import React, { useState, useEffect, useCallback } from 'react';
import { 
  Shield, 
  MapPin, 
  Fuel, 
  Truck, 
  Smartphone, 
  Bell, 
  CheckCircle, 
  Menu, 
  X, 
  Phone, 
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Battery, 
  Mic, 
  Globe,
  Star,
  ChevronRight,
  ChevronLeft,
  Clock,
  Zap
} from 'lucide-react';

// --- Assets ---
const IMAGES = {
  slider: [
    {
      url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=2000&q=80",
      title: "Real-Time Tracking",
      subtitle: "Locate your vehicle instantly across Ghana with 99.9% accuracy."
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80",
      title: "Fleet Management",
      subtitle: "Optimize routes and monitor driver behavior for maximum efficiency."
    },
    {
      url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=2000&q=80",
      title: "Fuel Monitoring",
      subtitle: "Detect fuel theft instantly with live tank level alerts and analytics."
    }
  ],
  magnetic: "https://spy-spot.com/cdn/shop/articles/19.jpg?auto=format&fit=crop&w=800&q=80",
  standard: "https://m.atcdn.co.uk/ect/media/w768/2060d4c496914b95a279767aa34f4937.jpg?auto=format&fit=crop&w=800&q=80",
  truck: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
  fuel: "https://s.alicdn.com/@sc04/kf/H89508efcf66a47b398d10ad08b94c821r/Dongfeng-8x4-20-M3-Aluminum-Alloy-Stainless-Steel-Lined-20-M3-Plastic-Tank-Truck-New-Fuel-Chemical-Liquid-Media-Transport.jpg?auto=format&fit=crop&w=800&q=80",
  parallaxBg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80",
  headerLogo: "/drive.png" // Add header logo image from drive.png
};

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl ${className}`}>
    {children}
  </div>
);

// --- Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Removed logo icon and added image from drive.png */}
            <img 
              src={IMAGES.headerLogo} 
              alt="DriveDetect" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Features', 'Packages', 'Testimonials'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white text-sm font-semibold transition-all hover:scale-105">
                {link}
              </a>
            ))}
            <a href="https://wa.me/233246349091" className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2">
              <Phone size={16} /> Contact Sales
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 p-6 flex flex-col gap-4 animate-fade-in">
          {['Home', 'Features', 'Packages', 'Testimonials'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 text-lg font-bold">{link}</a>
          ))}
          <a href="https://wa.me/233246349091" className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold">Book Now</a>
        </div>
      )}
    </nav>
  );
};

// --- Hero Slider ---
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === IMAGES.slider.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? IMAGES.slider.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-slate-950">
      {IMAGES.slider.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
            style={{ backgroundImage: `url('${slide.url}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className={`max-w-3xl transition-all duration-700 transform ${index === current ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 mb-6 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest tracking-widest">DriveDetect Ghana Ltd.</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1]">
                {slide.title.split(' ')[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  {slide.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#packages" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-600/40 transition-all hover:scale-105 flex items-center justify-center gap-2">
                  View Packages <ChevronRight size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-12 left-0 right-0 z-20 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex gap-4">
          <button onClick={prevSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex gap-3">
          {IMAGES.slider.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-blue-500' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Product Card Component ---
const ProductCard = ({ title, price, renewal, features, image, isPopular, details }) => {
  const whatsappUrl = `https://wa.me/233246349091?text=Hello%20DriveDetect,%20I'm%20interested%20in%20the%20${encodeURIComponent(title)}%20package%20priced%20at%20GH₵${price}.`;

  return (
    <div className={`relative group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] ${isPopular ? 'ring-4 ring-blue-500/30' : 'border border-gray-100'}`}>
      <div className="h-64 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-8 right-8">
          <h3 className="text-3xl font-black text-white">{title}</h3>
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mt-1">{details}</p>
        </div>
        {isPopular && (
            <div className="absolute top-6 right-6 bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl">
                Best Seller
            </div>
        )}
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl font-black text-slate-900">GH₵{price}</span>
        </div>
        <p className="text-gray-500 text-xs font-bold mb-4">Device + Install + 1 Year Data Included</p>

        <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl mb-8">
            <p className="text-xs font-black text-blue-700 uppercase tracking-tighter">Renewal: GH₵{renewal} Yearly</p>
        </div>

        <div className="mb-6">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Features:</h4>
            <ul className="grid grid-cols-1 gap-y-3">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 font-semibold text-sm leading-tight">
                  <CheckCircle className="text-blue-500 flex-shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 mb-6 italic">Price includes SIM, data and credit for the first year.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`w-full py-5 rounded-2xl font-black text-center transition-all flex items-center justify-center gap-2 ${isPopular ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40 hover:bg-blue-500' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
              Book Now <ChevronRight size={18} />
            </a>
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  const data = [
    {
        title: "Standard Package",
        price: "1400",
        renewal: "260",
        image: IMAGES.standard,
        details: "Complete Security",
        features: [
            "Full 24/7 live tracking",
            "Full trip PlayBack History",
            "100 Days Movement History",
            "Mobile and web Access",
            "Remote engine Shutdown",
            "Schedule Oil & Servicing Times",
            "Parking & Speeding alerts",
            "Engine on and Off Alerts"
        ]
    },
    {
      title: "Fuel Monitor",
      price: "3300",
      renewal: "350",
      isPopular: true,
      image: IMAGES.fuel,
      details: "Ultimate Intelligence",
      features: [
          "Live, Accurate Fuel Tank Level",
          "Live, Accurate Fuel Use data",
          "Live Fuel stealing Alerts",
          "Live Fuel refill Alerts",
          "Remote engine Monitor",
          "Full trip PlayBack (100 Days)",
          "Parking & Speeding alerts",
          "Engine on and Off Alerts"
      ]
    },
    {
      title: "Magnetic Tracker",
      price: "1250",
      renewal: "260",
      image: IMAGES.magnetic,
      details: "Wireless & Discreet",
      features: [
          "Full 24/7 live tracking",
          "100 Days Playback History",
          "50 Days Tracking per Charge",
          "Mobile and web Access",
          "Listen in & Record Conversations",
          "Removal Alert",
          "Parking & Speeding alert"
      ]
    },
    {
        title: "24V Heavy Duty",
        price: "1800",
        renewal: "260",
        image: IMAGES.truck,
        details: "Trucks & Logistics",
        features: [
            "Full 24/7 live tracking",
            "Full trip PlayBack (100 Days)",
            "Mobile and web Access",
            "Remote engine Monitor",
            "Schedule Oil & Servicing Times",
            "Parking & Speeding alerts",
            "Engine on and Off Alerts"
        ]
      }
  ];

  return (
    <section id="packages" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Our Packages</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">Choose the perfect protection for your vehicle.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((pkg, i) => (
            <ProductCard key={i} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SimplePriceList = () => {
    const hardware = [
        { name: "1-Way Security Alarm", price: "800" },
        { name: "Magnetic Tracker Device", price: "1250" },
        { name: "Voice Monitoring Tracker", price: "1700" },
        { name: "Global Active Tracker", price: "2400" },
        { name: "24V Fuel Monitoring Tracker", price: "3300" },
    ];

    const renewals = [
        { name: "Fuel Tracker Renewal", price: "550" },
        { name: "Data Renewal", price: "460" },
        { name: "Own SIM Renewal", price: "400" },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl">
                        <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                            <Zap className="text-blue-500" /> Additional Hardware
                        </h3>
                        <div className="space-y-4">
                            {hardware.map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                                    <span className="font-bold text-gray-300">{item.name}</span>
                                    <span className="font-black text-blue-400">GH₵{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-2xl">
                        <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                            <Clock className="text-blue-100" /> Yearly Renewals
                        </h3>
                        <div className="space-y-4">
                            {renewals.map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                                    <span className="font-bold text-blue-100">{item.name}</span>
                                    <span className="font-black text-white">GH₵{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
  const reviews = [
    { name: "John Mensah", role: "Fleet Owner", text: "DriveDetect caught fuel theft within the first week. The Fuel Monitor package paid for itself instantly!" },
    { name: "Akosua Boateng", role: "Private Owner", text: "I love the voice monitoring feature on the magnetic tracker. Very professional team and great app." },
    { name: "Prince Osei", role: "Logistics Manager", text: "Best tracking solution in Ghana. The 100 days playback feature is seamless and accurate." }
  ];

  return (
    <section id="testimonials" className="py-32 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-20">Client Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <GlassCard key={i} className="p-10 border-white/5">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={16} />)}
              </div>
              <p className="text-lg font-medium text-gray-300 mb-8 italic">"{r.text}"</p>
              <div>
                <h4 className="font-black text-white">{r.name}</h4>
                <p className="text-blue-500 text-sm font-bold uppercase tracking-widest">{r.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const phone = '+233246349091';
  const displayPhone = '+233 24 634 9091';
  const whatsapp = `https://wa.me/233246349091`;
  const socials = [
    { Icon: Twitter, url: 'https://twitter.com/DriveDetectGH' },
    { Icon: Facebook, url: 'https://facebook.com/DriveDetectGH' },
    { Icon: Instagram, url: 'https://instagram.com/DriveDetectGH' },
    { Icon: Linkedin, url: 'https://linkedin.com/company/drivedetect' }
  ];

  return (
    <footer className="bg-slate-950 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg shadow-lg">
              <MapPin className="text-white w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">DRIVE<span className="text-blue-500">DETECT</span></h3>
              <p className="text-gray-400 text-sm">Protect your asset to gain your peace of mind.</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2">Contact Us</p>
            <a href={`tel:${phone}`} className="text-white font-black text-lg block">{displayPhone}</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold">
              <Phone size={16} /> Message on WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-3">
            {socials.map(({ Icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition">
                <Icon className="text-white" size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} DriveDetect Ghana Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <HeroSlider />
      
      <section className="py-12 bg-slate-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="text-blue-500 font-black text-3xl">01</div>
            <p className="text-gray-400 text-xs font-bold uppercase leading-tight">Locate vehicle in real-time if stolen</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-blue-500 font-black text-3xl">02</div>
            <p className="text-gray-400 text-xs font-bold uppercase leading-tight">Professional Fleet Management</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-blue-500 font-black text-3xl">03</div>
            <p className="text-gray-400 text-xs font-bold uppercase leading-tight">Reduce fuel costs & Optimize Routes</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-blue-500 font-black text-3xl">04</div>
            <p className="text-gray-400 text-xs font-bold uppercase leading-tight">Maintenance Alerts & Engine Monitor</p>
          </div>
        </div>
      </section>

      <Packages />
      <SimplePriceList />

      {/* Parallax Section */}
      <section className="h-[60vh] relative bg-fixed bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: `url('${IMAGES.parallaxBg}')` }}>
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-6">
            <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-8">Secure Your Ride Today</h2>
            <a href="https://wa.me/233246349091" className="inline-block px-12 py-6 bg-white text-slate-900 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                Order via WhatsApp
            </a>
        </div>
      </section>

      <Testimonials />
      <Footer />

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;