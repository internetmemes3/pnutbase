import Image from "next/image";

export default function Home() { 
  const images = [
    { src: '/pic01.JPG', alt: 'Image 1' },
    { src: '/pic02.JPG', alt: 'Image 2' },
    { src: '/pic03.JPG', alt: 'Image 3' },
    { src: '/pic04.JPG', alt: 'Image 4' },
    { src: '/pic06.JPG', alt: 'Image 6' },
    { src: '/pic07.JPG', alt: 'Image 7' },
    { src: '/pic08.JPG', alt: 'Image 8' },
    { src: '/pic09.JPG', alt: 'Image 9' },
    { src: '/pic10.JPG', alt: 'Image 10' },
    { src: '/pic11.JPG', alt: 'Image 11' },
    { src: '/pic12.JPG', alt: 'Image 12' },
    { src: '/pic13.JPG', alt: 'Image 13' },
    { src: '/pic14.JPG', alt: 'Image 14' },
    { src: '/pic15.JPG', alt: 'Image 15' },
    { src: '/pic16.JPG', alt: 'Image 16' }
  ];

  return (
    <div>
      <Image
          src="/PNUTBANNER.png"
          alt="Main"
          className="w-full h-full"
          width={700}
          height={400}
        />
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 md:p-12 lg:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <main className="w-full max-w-4xl text-center flex flex-col gap-6 sm:gap-8 md:gap-12 items-center">

        <div className="w-full">
          <div className="flex justify-center space-x-4 sm:space-x-6 items-center">
            <a href="https://x.com/Pnut_Base" title="Visit X" target="_blank" className="transform hover:scale-110 transition duration-300">
              <Image
                src="/X.jpg"
                alt="X"
                className="rounded-full border-4 border-white hover:border-white w-12 h-12 sm:w-16 sm:h-16"
                width={60}
                height={60}
              />
            </a>
            <a href="https://dexscreener.com/base/0x293a9c9bff2415fb39229a6aa01cbff5669b2ba9" title="Visit Dexscreener" target="_blank" className="transform hover:scale-110 transition duration-300">
              <Image
                src="/dex.png"
                alt="Dexscreener"
                className="rounded-full border-4 border-white hover:border-white w-12 h-12 sm:w-16 sm:h-16"
                width={60}
                height={60}
              />
            </a>
            <a href="https://t.me/pnut_base" title="Visit Telegram" target="_blank" className="transform hover:scale-110 transition duration-300">
              <Image
                src="/telegram.png"
                alt="Telegram"
                className="rounded-full border-4 border-white hover:border-white w-12 h-12 sm:w-16 sm:h-16"
                width={60}
                height={60}
              />
            </a>
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-500 w-full font-bold text-center mt-8 mb-8">
          In memory of  Peanut 🥜 the Squirrel, beloved pet and internet sensation. Friend, and fighter to the end. We will keep your memory alive on base.
          </p>
          <p className="text-xs text-black sm:text-2xl w-full font-bold text-center mt-10 sm:mt-4 mb-10">
          0x293A9C9bff2415FB39229a6AA01CbFF5669b2BA9
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 w-full max-w-4xl mt-8">
            {images.map((image, index) => (
              <div key={index} className="w-full aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
