import CheckerboardBackground from "@/components/checkerboard-background";

export default function Hero() {
    return (

        <section
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

            <CheckerboardBackground isAbsolute={true} />


            <div className="relative z-10 text-center px-4 py-8">
                <h3 className="my-6 text-turquoise text-xl md:text-2xl font-medium tracking-[0.3em] uppercase">
                    Welcome to
                </h3>

                {/* Bubblegum with two text shadows  */}
                <h1 className="hero text-6xl font-playfair md:text-8xl lg:text-9xl font-black text-cherry mb-4 relative inline-block"
                >
                    Bubblegum
                </h1>

                <div className="flex items-center justify-center gap-4 mb-8">

                    {/* dash diner dash  */}
                    <div className="h-1 w-16 md:w-32 bg-gradient-to-r from-transparent via-cherry to-transparent" />
                    <h2 className="text-4xl md:text-6xl font-bold text-turquoise tracking-wider">
                        DINER
                    </h2>
                    <div className="h-1 w-16 md:w-32 bg-gradient-to-r from-transparent via-cherry to-transparent" />

                </div>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10 italic">
                    Where every bite is a trip down memory lane
                </p>
                <div className="mb-10">
                    <div className="text-6xl animate-bop"
                    // style="transform: translateY(-9.785345px) rotate(1.914138deg);"
                    >
                        🐩
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/Menu"><button className="px-10 py-4 bg-cherry text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all border-4 border-white"
                    >
                        View Menu
                    </button>
                    </a>
                    <a href="/Jukebox">
                        <button className="px-10 py-4 bg-turquoise text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all border-4 border-white"
                        >
                            🎵 Hit the Jukebox
                        </button>
                    </a>
                </div>
            </div>

        </section>
    )

}
