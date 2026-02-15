import { Star } from "lucide-react";

export default function FanFavorites() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cherry font-semibold tracking-widest uppercase text-sm">
            Our Specialties
          </span>
          <h3 className="text-4xl font-playfair md:text-5xl font-bold text-gray-800 mt-2">
            Fan Favorites
          </h3>
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-3xl">
              <div className="h-px w-8 bg-cherry/30"></div>
              <Star className="w-6 h-6 text-cherry/50 fill-cherry/50" />
              <Star className="w-6 h-6 text-cherry/50 fill-cherry/50" />
              <Star className="w-6 h-6 text-cherry/50 fill-cherry/50" />
              <Star className="w-6 h-6 text-cherry/50 fill-cherry/50" />
              <Star className="w-6 h-6 text-cherry/50 fill-cherry/50" />
              <div className="h-px w-8 bg-cherry/30"></div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="group"
            // style="opacity: 1; transform: none;"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-turquoise/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&amp;h=300&amp;fit=crop"
                  alt="Classic Burger"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-cherry text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  $8.99
                </div>
              </div>
              <div className="p-6 text-center bg-gradient-to-b from-white to-cream/50">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Classic Burger
                </h4>
                <div className="flex justify-center gap-1">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          <div
            className="group"
            // style="opacity: 1; transform: none;"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-turquoise/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&amp;h=300&amp;fit=crop"
                  alt="Strawberry Shake"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-cherry text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  $5.99
                </div>
              </div>
              <div className="p-6 text-center bg-gradient-to-b from-white to-cream/50">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Strawberry Shake
                </h4>
                <div className="flex justify-center gap-1">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
          <div
            className="group"
            // style="opacity: 1; transform: none;"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-turquoise/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&amp;h=300&amp;fit=crop"
                  alt="Loaded Fries"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-cherry text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  $6.99
                </div>
              </div>
              <div className="p-6 text-center bg-gradient-to-b from-white to-cream/50">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Loaded Fries
                </h4>
                <div className="flex justify-center gap-1">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
