import "./globals.css";
import Link from "next/link";
import Image from "next/image";
// import font awesome
import "@fortawesome/fontawesome-svg-core/styles.css"
// configurasi font awesome
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// import font awesome (icon)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body>
        {/* buat header */}
        <header className="bg-ungu">
          <div className="flex flex-row items-center justify-between px-4">
            <div className="flex flex-row items-center">
              <Image src={"/logo.png"} alt="Logo KORA" width={150} height={70} priority></Image>
              <h1 className="text-2xl font-bold text-white ml-4">Selamat Datang di KoraMenu</h1>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="text-white px-2 py-2 text-base font-semibold rounded-lg hover:bg-maroon hover:text-white transition duration-300">
                HOME
              </Link>
              <Link href="/about" className="text-white px-2 py-2 text-base font-semibold rounded-lg hover:bg-maroon hover:text-white transition duration-300">
                ABOUT US
              </Link>
              <Link href="/menu" className="text-white px-2 py-2 text-base font-semibold rounded-lg hover:bg-maroon hover:text-white transition duration-300">
                MENU
              </Link>
            </div>
          </div>
        </header>

        {children}

        {/* buat footer */}
        <footer className="text-white bg-ungu fixed bottom-0 w-full text-center py-4">
          Copyright &copy; 2025 - KoraMenu
        </footer>
      </body>
    </html>
  );
}