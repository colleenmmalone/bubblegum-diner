import { CupSoda, Dessert, Hamburger, IceCreamBowl, Salad } from "lucide-react";
import MenuCard from "./menu-card";

export default function MenuGrid() {
  const menuItems = [
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      alt: "the classic burger menu item",
      name: "The Classic",
      description:
        "Quarter-pound beef patty, lettuce, tomato, pickles, and our secret sauce",
      price: "8.99",
      isHot: true,
    },
    {
      src: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
      alt: "BUBBLEGUM DELUXE",
      name: "BUBBLEGUM DELUXE",
      description:
        "Double patty, bacon, cheddar, caramelized onions, and cherry aioli",
      price: "12.99",
    },
    {
      src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9",
      alt: "THE POODLE",
      name: "THE POODLE",
      description:
        "Grilled chicken breast, swiss cheese, avocado, and honey mustard",
      price: "10.99",
    },
    {
      src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5",
      alt: "MUSHROOM MELT",
      name: "MUSHROOM MELT",
      description:
        "Beef patty smothered in sautéed mushrooms and melted provolone",
      price: "10.99",
    },
    {
      src: "https://images.unsplash.com/photo-1520072959219-c595dc870360",
      alt: "THE VEGGIE BOP",
      name: "THE VEGGIE BOP",
      description:
        "House-made veggie patty with all the fixings and vegan mayo",
      price: "9.99",
      isHot: true,
    },
    {
      src: "https://images.unsplash.com/photo-1586816001966-79b736744398",
      alt: "BBQ RANCH RIDER",
      name: "BBQ RANCH RIDER",
      description:
        "Beef patty, crispy onion rings, bacon, BBQ sauce, and ranch",
      price: "11.99",
    },
    // {
    //   src: "",
    //   alt: "",
    //   name: "",
    //   description:
    //     "",
    //   price: "",
    // },
  ];

  return (
    <>
      <section className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide px-4 py-4 gap-3">
            <button className="px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all bg-cherry text-white shadow-lg scale-105">
              <Hamburger /> Burgers
            </button>
            <button className="px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all bg-gray-100 text-gray-600 hover:bg-gray-200">
                <IceCreamBowl />
                 Shakes
            </button>
            <button className="px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all bg-gray-100 text-gray-600 hover:bg-gray-200">
              <Salad /> Sides
            </button>
            <button className="px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all bg-gray-100 text-gray-600 hover:bg-gray-200">
              <Dessert /> Desserts
            </button>
            <button className="px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all bg-gray-100 text-gray-600 hover:bg-gray-200">
              <CupSoda /> Drinks
            </button>
          </div>
        </div>
      </section>
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((m, i) => (
              <MenuCard key={i} {...m} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
