import CheckerboardBackground from '../../components/checkerboard-background'

export default function Footer() {


  return (
    <>
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-4xl">🍔</span>
                <div>
                  <span className="text-2xl font-playfair font-black text-cherry">
                    Bubblegum
                  </span>
                  <span className="text-lg text-turquoise font-bold ml-1">
                    DINER
                  </span>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Serving up nostalgia since 1952. Where every meal is a trip back
                in time to the golden age of rock and roll.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-2xl">🐩</span>
                <span className="text-2xl">🥤</span>
                <span className="text-2xl">🎵</span>
                <span className="text-2xl">⭐</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  className="block text-gray-400 hover:text-cherry transition-colors"
                  href="/Home"
                >
                  Home
                </a>
                <a
                  className="block text-gray-400 hover:text-cherry transition-colors"
                  href="/Menu"
                >
                  Menu
                </a>
                <a
                  className="block text-gray-400 hover:text-cherry transition-colors"
                  href="/Jukebox"
                >
                  Jukebox
                </a>
                <a
                  className="block text-gray-400 hover:text-cherry transition-colors"
                  href="/Merch"
                >
                  Merch
                </a>
                <a
                  className="block text-gray-400 hover:text-cherry transition-colors"
                  href="/About"
                >
                  About
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Visit Us</h4>
              <div className="text-gray-400 space-y-2">
                <p>123 Nostalgia Lane</p>
                <p>Retro City, RC 50505</p>
                <p className="text-cherry">(555) 123-4567</p>
              </div>
            </div>
          </div>
          {/* <div
            className="h-4 w-full mb-8 opacity-30"
            // style="background-image: repeating-conic-gradient(rgb(231, 84, 128) 0%, rgb(231, 84, 128) 25%, transparent 0%, transparent 50%); background-size: 16px 16px;"
            style={{
              backgroundImage:
                "repeating-conic-gradient(var(--color-cherry) 0%, var(--color-cherry) 25%, transparent 0%, transparent 50%)",
              backgroundSize: "16px 16px",
            }}
          /> */}
          <CheckerboardBackground size={16} className="!h-4 mb-8" opacity={30} />
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 Bubblegum Diner. All rights reserved.</p>
            <p className="mt-1">
              Made with 💗 and a whole lotta rock 'n' roll
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
