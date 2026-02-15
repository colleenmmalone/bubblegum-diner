import { Star } from "lucide-react";

export default function MenuCard(props: {
  src: string;
  alt: string;
  name: string;
  description?: string;
  price: string;
  isHot?: boolean;
}) {
  const src =
    props.src || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd";
  const alt = props.alt || "The Classic";
  const name = props.name || "The Classic";
  const description =
    props.description ||
    "Quarter-pound beef patty, lettuce, tomato, pickles, and our secret sauce";
  const price = props.price || "$8.99";
  const isHot = props.isHot || false;

  return (
    <div className="group relative cursor-default ">
      <div className="bg-white border-4 border-turquoise/40 rounded-sm shadow-[4px_4px_0px_0px_rgba(231,84,128,0.3)] hover:translate-y-[-5px] hover:shadow-[6px_6px_0px_0px_rgba(231,84,128,0.4)] transition-all duration-500 overflow-hidden">
        {/* image section  */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 sepia-[0.2] group-hover:sepia-0 duration-500"
          />

          {/* hot banner */}
          <div
            className={`absolute top-5 left-2 bg-cherry text-white px-3 py-1 text-xs font-bold ${isHot ? "flex" : "hidden"} items-center gap-1 rotate-[-20deg] shadow-md animate-pulse`}
            style={{
              clipPath: "polygon(10% 0px, 100% 0px, 90% 100%, 0px 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-flame w-3 h-3"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>{" "}
            HOT!
          </div>
        </div>

        {/* description section  */}
        <div className="p-5 text-center relative">
          {/* dash star dash */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-px w-8 bg-cherry/30"></div>
            <Star className="w-3 h-3 text-cherry/50 fill-cherry/50" />
            <div className="h-px w-8 bg-cherry/30"></div>
          </div>

          <h3 className="text-xl font-playfair font-black text-gray-800 mb-1 tracking-wide uppercase">
            {name}
          </h3>
          <div
            className="inline-block bg-turquoise text-white px-5 py-1 font-black text-lg my-2 shadow-sm group-hover:scale-115 transition-transform duration-300"
            style={{
              clipPath: "polygon(15% 0px, 100% 0px, 85% 100%, 0px 100%)",
            }}
          >
            ${price}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            {description}
          </p>

          {/* corner flair  */}
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cherry/40" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cherry/40" />
        </div>
      </div>
    </div>
  );
}
