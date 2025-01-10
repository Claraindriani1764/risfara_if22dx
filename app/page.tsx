import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-start justify-center bg-white">
      <main className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 mt-20">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-6xl font-bold text-maroon">
            KoraMenu
          </h1>
          <p className="text-lg text-gray-700">
            Selamat datang di KoraMenu, solusi digital untuk kebutuhan kuliner Anda. Kami menyediakan platform yang memudahkan Anda dalam menjelajahi berbagai pilihan menu makanan lezat dengan tampilan yang menarik dan informatif.
          </p>

          <div className="flex gap-4">
            <Link href="/menu" className="bg-maroon text-white px-6 py-3 rounded-full hover:bg-ungu transition-colors">
              Menu
            </Link>
            <Link href="/about" className="border-2 border-maroon text-maroon px-6 py-3 rounded-full hover:bg-ungu transition-colors">
              About Us
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/logo.png"
            alt="KoraMenu"
            width={700}
            height={700}
            // className="rounded-lg shadow-2xl"
            priority
          />
        </div>
      </main>
    </div>
  );
}
