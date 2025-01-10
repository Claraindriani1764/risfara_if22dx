import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-putih p-[20px] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50 -z-20"></div>
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-start gap-[40px] md:gap-60 relative">
        {/* Left Text Section */}
        <div className="text-left max-w-lg flex flex-col gap-6 md:mt-20">
          <h1 className="text-5xl font-semibold text-hitam-tua leading-snug">
            Kora Menu
          </h1>
          <p className="text-hitam-sedang text-lg text-justify">
            Kora Menu adalah platform website untuk memudahkan kasir atau admin
            mengelola menu restoran. Pengguna dapat menambah, memperbarui, atau
            menghapus menu yang tidak tersedia secara real-time. Dengan
            antarmuka yang sederhana, Kora Menu memastikan pengelolaan menu yang
            efisien dan akurat bagi pelanggan.
          </p>
          </div>
          </div>
    </div>
  );
}
