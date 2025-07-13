import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  Coffee,
  Candy,
  Package,
  Mail,
  CheckCircle,
  Star,
  Heart,
  Smile,
  Wrench,
  Truck,
  Phone,
  CreditCard,
  GraduationCap,
  Wine
} from 'lucide-react';

function App() {
  const [blinkingLights, setBlinkingLights] = useState(true);

  // Blinking lights effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkingLights(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      
      {/* Hero Section - Compact Vending Machine Style Header */}
      <section className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Blinking lights */}
        <div className="absolute top-2 left-0 right-0 flex justify-center space-x-4">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                blinkingLights ? 'bg-yellow-300 shadow-lg shadow-yellow-300/50' : 'bg-yellow-600'
              }`}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-3">
              <img 
                src="/CaptainSnaxLogo.png" 
                alt="Captain Snax Logo" 
                className="h-16 w-16 rounded-full shadow-2xl animate-pulse border-2 border-white"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-wider mb-3 drop-shadow-2xl">
              CAPTAIN <span className="text-yellow-300">SNAX</span>
            </h1>
            <div className="bg-black/40 rounded-xl px-6 py-2 inline-block border-2 border-white/50 mb-3">
              <p className="text-lg lg:text-xl font-bold">🍿 PROFESSIONAL SNACK VENDING SERVICE 🍿</p>
            </div>
            <p className="text-lg lg:text-xl mb-3 max-w-4xl mx-auto leading-relaxed">
              We place snack vending machines in your space, keep them stocked, and handle all maintenance.
            </p>
            <div className="text-lg font-bold bg-white/20 rounded-full px-4 py-2 inline-block">
              📍 Serving <span className="text-yellow-300">Asheville</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Clean and Clear */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Do 🤝
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Simple, reliable snack vending machine service for your location.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-blue-200 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl w-fit mb-6 group-hover:animate-bounce">
                <Package className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏢 We Place Machines</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We bring quality snack vending machines to your location and handle installation. You just provide the space.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-green-200 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl w-fit mb-6 group-hover:animate-bounce">
                <Truck className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚚 Regular Restocking</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We monitor inventory and restock machines on schedule with fresh snacks and popular items.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-orange-200 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl w-fit mb-6 group-hover:animate-bounce">
                <Wrench className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Full Maintenance</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We handle all repairs, cleaning, and technical issues to keep machines running smoothly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-purple-200 transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl w-fit mb-6 group-hover:animate-bounce">
                <Heart className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🥗 Healthy Options</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We stock healthy snacks alongside popular favorites for everyone's preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Vending Machine Display - Fun Element */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">Our Snack Machines 🌟</h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Modern, reliable machines stocked with quality snacks and treats.
            </p>
          </div>

          {/* Mini Vending Machine Display */}
          <div className="bg-gradient-to-b from-slate-300 to-slate-500 rounded-3xl shadow-2xl border-8 border-slate-600 overflow-hidden max-w-3xl mx-auto">
            
            {/* Display Screen */}
            <div className="bg-black m-6 rounded-2xl p-6 border-4 border-slate-700">
              <div className="bg-green-900 rounded-xl p-6 font-mono text-green-400 border-2 border-green-700 text-center">
                <div className="text-2xl font-bold mb-4">═══ CAPTAIN SNAX MACHINES ═══</div>
                <div className="text-lg mb-4">🍿 Snacks • 🍪 Treats • 🥗 Healthy Options</div>
                <div className="text-yellow-400 text-xl animate-pulse">💳 ACCEPTS CASH & CARDS</div>
              </div>
            </div>

            {/* Sample Vending Slots */}
            <div className="mx-6 mb-6">
              <div className="bg-black rounded-2xl p-6 border-4 border-slate-700">
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { name: '🍿', color: 'bg-yellow-400' },
                    { name: '🍪', color: 'bg-orange-400' },
                    { name: '🥗', color: 'bg-green-400' },
                    { name: '🥜', color: 'bg-yellow-600' },
                    { name: '🍎', color: 'bg-green-300' },
                    { name: '🍫', color: 'bg-amber-600' },
                    { name: '🥨', color: 'bg-orange-600' },
                    { name: '🍇', color: 'bg-purple-400' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`${item.color} rounded-xl p-4 text-center border-4 border-white/50 hover:scale-105 transition-all duration-300 cursor-pointer`}
                    >
                      <div className="text-3xl">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mx-6 mb-6">
              <div className="bg-slate-700 rounded-2xl p-4 border-4 border-slate-600">
                <div className="text-center text-white font-bold text-lg mb-3">ACCEPTED PAYMENT METHODS</div>
                <div className="flex justify-center items-center space-x-4 flex-wrap gap-2">
                  <div className="bg-white rounded-lg px-3 py-2 text-blue-600 font-bold text-sm">VISA</div>
                  <div className="bg-white rounded-lg px-3 py-2 text-red-600 font-bold text-sm">MASTERCARD</div>
                  <div className="bg-white rounded-lg px-3 py-2 text-blue-800 font-bold text-sm">AMEX</div>
                  <div className="bg-black rounded-lg px-3 py-2 text-white font-bold text-sm">🍎 PAY</div>
                  <div className="bg-white rounded-lg px-3 py-2 text-green-600 font-bold text-sm">G PAY</div>
                  <div className="bg-green-600 rounded-lg px-3 py-2 text-white font-bold text-sm">💵 CASH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Locations Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Currently Serving Asheville 🏆</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Proud to provide snack services to these amazing local organizations:
            </p>
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-200 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500 rounded-full p-2">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-gray-800">5 Local YMCA Locations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-pink-500 rounded-full p-2">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-gray-800">YWCA of Asheville</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full p-2">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-gray-800">2 Private Schools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500 rounded-full p-2">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-gray-800">Multiple Office Buildings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Perfect For Any Location 🏢</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Office buildings, gyms, hotels, hospitals, schools, bars - we have the right machine for your location.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { icon: '🏢', label: 'Offices', color: 'from-blue-400 to-blue-600' },
              { icon: '💪', label: 'Gyms', color: 'from-orange-400 to-orange-600' },
              { icon: '🏨', label: 'Hotels', color: 'from-green-400 to-green-600' },
              { icon: '🏥', label: 'Healthcare', color: 'from-purple-400 to-purple-600' },
              { icon: '🛍️', label: 'Retail', color: 'from-pink-400 to-pink-600' },
              { icon: '🍺', label: 'Bars/Breweries', color: 'from-amber-400 to-amber-600' },
              { icon: '🎓', label: 'Schools', color: 'from-indigo-400 to-indigo-600' }
            ].map((location, index) => (
              <div key={index} className={`bg-gradient-to-br ${location.color} rounded-3xl p-6 text-white text-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105`}>
                <div className="text-4xl lg:text-5xl mb-3">{location.icon}</div>
                <div className="font-bold text-lg lg:text-xl">{location.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Vending Machine Style */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-3xl p-8 border-8 border-slate-600 shadow-2xl">
            <div className="bg-green-900 rounded-2xl p-8 border-4 border-green-700">
              <div className="font-mono text-green-400 text-center">
                <div className="text-4xl font-bold mb-6">═══ CONTACT CAPTAIN SNAX ═══</div>
                <div className="text-2xl mb-8 text-white">Ready to add snack vending to your location?</div>
                
                <div className="bg-black/50 rounded-xl p-8 mb-8 border-2 border-green-600">
                  <div className="flex items-center justify-center mb-6">
                    <Mail className="h-12 w-12 mr-4 text-yellow-400" />
                    <span className="text-yellow-400 text-3xl font-bold">EMAIL US</span>
                  </div>
                  <a 
                    href="mailto:info@captainsnax.com"
                    className="text-4xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 hover:scale-105 transform inline-block"
                  >
                    info@captainsnax.com
                  </a>
                </div>
                
                <div className="text-2xl text-green-300 mb-4">
                  📍 Proudly serving Asheville
                </div>
                <div className="text-lg text-green-500">
                  🤝 Professional • 🔧 Reliable • 🍿 Quality Snack Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-700 to-slate-800 py-8 border-t-8 border-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center items-center mb-4">
              <img 
                src="/CaptainSnaxLogo.png" 
                alt="Captain Snax Logo" 
                className="h-12 w-12 rounded-full mr-4 animate-pulse border-4 border-white"
              />
              <span className="text-3xl font-bold">CAPTAIN <span className="text-orange-400">SNAX</span></span>
            </div>
            <p className="text-xl text-slate-300">
              🍿 Professional Snack Vending Service • 🔧 Reliable Maintenance • 🏠 Asheville
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;