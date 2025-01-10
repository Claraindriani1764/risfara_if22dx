import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-start justify-center bg-white">
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 mt-20">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-6xl font-bold text-coklat">
            KoraMenu
          </h1>
          <p className="text-lg text-gray-700">
            Selamat datang di KoraMenu, solusi digital untuk kebutuhan kuliner Anda. Kami menyediakan platform yang memudahkan Anda dalam menjelajahi berbagai pilihan menu makanan lezat dengan tampilan yang menarik dan informatif.
          </p>
          
        </div>

        
      </main>
    </div>
  );
}
