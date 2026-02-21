import { Star } from "lucide-react";
import FavoritesCard from "./favorites-card";

export default function FanFavorites() {

  const favorites = [
    {
      src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&amp;h=300&amp;fit=crop',
      title: 'Classic Burger',
    },
    {
      src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&amp;h=300&amp;fit=crop',
      title: 'Chocolate Shake',
    },
    {
      src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&amp;h=300&amp;fit=crop',
      title: 'Truffle Parm Fries',
    },
  ]

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

          {favorites.map((item, i) => (
            <FavoritesCard src={item.src} alt={item.title} name={item.title} key={i} />
          ))}

        </div>
      </div>
    </section>
  );
}
