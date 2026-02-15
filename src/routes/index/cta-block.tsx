import DotBackground from "../../components/dot-background";
import CheckerboardBackground from "@/components/checkerboard-background";

export default function CTABlock() {
  return (
    <>
      <CheckerboardBackground size={32} className="!h-8" opacity={100} />
      <section className="py-20 px-4 bg-cherry relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <DotBackground />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
          // style="opacity: 1; transform: none;"
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
              className="lucide lucide-sparkles w-12 h-12 text-white mx-auto mb-6"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            <h3
              className="text-4xl font-playfair
         md:text-5xl font-bold text-white mb-6"
            >
              Ready to Roll Back Time?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Drop by Bubblegum Diner and experience the magic of the 1950s.
              Great food, groovy tunes, and memories that'll last forever!
            </p>
            <div className="flex justify-center">
              <a href="/Merch">
                <button className="px-10 py-4 bg-turquoise text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all border-4 border-white">
                  Shop Merch
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
