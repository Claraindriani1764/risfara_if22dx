import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 p-[20px] relative">
      <div className="absolute top-0 left-0 w-full h-full -z-20"></div>
      
      {/* Section About */}
      <div className="flex flex-col md:flex-row items-start gap-[40px] md:gap-60 relative">
        <div className="text-left max-w-lg flex flex-col gap-6 md:mt-20">
          <h1 className="text-5xl font-bold text-gray-800 leading-snug">
            Kora Menu
          </h1>
          <p className="text-gray-600 text-lg text-justify">
            Kora Menu adalah platform website untuk memudahkan kasir atau admin
            mengelola menu restoran. Pengguna dapat menambah, memperbarui, atau
            menghapus menu yang tidak tersedia secara real-time. Dengan
            antarmuka yang sederhana, Kora Menu memastikan pengelolaan menu yang
            efisien dan akurat bagi pelanggan.
          </p>
          <div className="flex gap-6">
            <Link
              href="/menu"
              className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-600 hover:scale-105 transform transition"
            >
              Menu
            </Link>
            <Link
              href="/book"
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 hover:scale-105 transform transition"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Section Gambar */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0 md:mt-20">
          <div className="absolute inset-0 w-full h-full bg-orange-400 rounded-full animate-pulse -z-10"></div>
          <Image
            src="/chef.png"
            alt="Chef"
            width={384}
            height={384}
            className="object-cover rounded-full transform transition"
          />
        </div>
      </div>


      {/* Contact Us Section */}
      <div className="mt-10 w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Jika Anda memiliki pertanyaan, saran, atau ingin mengetahui lebih
          lanjut tentang Kora Menu, jangan ragu untuk menghubungi kami melalui
          formulir di bawah ini.
        </p>
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition placeholder-gray-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition placeholder-gray-500"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 py-3 rounded-md hover:bg-orange-600 hover:scale-105 transform transition text-white font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
