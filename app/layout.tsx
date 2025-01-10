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
        <header>
          <Image src={"/logo.png"} alt="Logo KORA" width={150} height={70}priority></Image>
        </header>

        

        {/* buat footer */}
        <footer className="text-white bg-hitam-muda fixed bottom-0 w-full text-center py-4">
          Copyright &copy; 2025 - KoraMenu
        </footer>
      </body>
    </html>
  );
}