import { useNavigate } from '@tanstack/react-router';

export default function FavoritesCard(props: {
  src: string;
  alt: string;
  name: string;
  key: number;
}) {
  const navigate = useNavigate();
  const src =
    props.src || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd";
  const alt = props.alt || "The Classic";
  const name = props.name || "The Classic";

  return (
    <div key={props.key} className="group relative cursor-default "
    onClick={() => navigate({ to: '/menu' })}
    >
      <div className="bg-white border-4 border-turquoise/40 rounded-sm shadow-[4px_4px_0px_0px_rgba(231,84,128,0.3)] hover:translate-y-[-5px] hover:shadow-[6px_6px_0px_0px_rgba(231,84,128,0.4)] transition-all duration-500 overflow-hidden">
        {/* image section  */}
        <div className="relative h-80 overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 sepia-[0.2] group-hover:sepia-0 duration-500"
          />
        </div>

        {/* content section  */}
        <div className="p-5 py-7 text-center relative">

          <h3 className="text-xl font-playfair font-black text-gray-800 mb-2\1 tracking-wide uppercase">
            {name}
          </h3>

          <div className="flex justify-center gap-1">⭐⭐⭐⭐⭐</div>

          {/* corner flair  */}
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cherry/40" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-cherry/40" />
        </div>
      </div>
    </div>
  );
}
