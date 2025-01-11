import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Sushi",
      description:
        "Sushi adalah hidangan khas Jepang yang terbuat dari nasi yang dicampur cuka, biasanya dipadukan dengan lauk berupa ikan mentah, seafood, atau sayuran.",
      price: 20000,
      image: "/sushi.JPG",
    },
    {
      id: 2,
      name: "Chicken Karaage",
      description:
        "Chicken Karaage adalah hidangan khas Jepang yang terbuat dari potongan ayam yang dibumbui dengan campuran bumbu khas Jepang seperti jahe, bawang putih, dan kecap asin.",
      price: 20000,
      image: "/chicken-karage.JPG",
    },
    {
      id: 3,
      name: "Nasi Bakar",
      description:
        "Nasi bakar adalah makanan khas Indonesia yang terbuat dari nasi yang dibungkus dengan daun pisang lalu dibakar.",
      price: 10000,
      image: "/nasi-bakar.JPG",
    },
    {
      id: 4,
      name: "Mie Ayam",
      description:
        "Mie ayam adalah hidangan khas Indonesia yang terdiri dari mie kuning yang kenyal, potongan daging ayam suwir, dan kuah kaldu ayam yang gurih. Biasanya disajikan dengan sawi hijau, bawang goreng, dan kecap manis.",
      price: 10000,
      image: "/mie-ayam.JPG",
    },
    {
      id: 5,
      name: "Wonton",
      description:
        "Wonton adalah hidangan khas Tiongkok yang terdiri dari kulit tipis yang berisi campuran daging cincang, sayuran, dan bumbu-bumbu. Bentuknya mirip pangsit, namun kulitnya lebih tipis.",
      price: 13000,
      image: "/wonton.JPG",
    },
    {
      id: 6,
      name: "Ayam Geprek",
      description:
        "Ayam Geprek adalah hidangan ayam goreng tepung yang digeprek atau dilumatkan bersama sambal.",
      price: 15000,
      image: "/ayam-geprek.JPG",
    },
    {
      id: 7,
      name: "Ayam Katsu",
      description:
        "Ayam Katsu adalah hidangan khas Jepang yang terbuat dari daging ayam yang dipukul tipis, lalu dilapisi tepung roti (panko) dan digoreng hingga renyah.",
      price: 20000,
      image: "/chicken-katsu.JPG",
    },
  ];
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-maroon">Kora Menu</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-maroon">
                  Rp. {item.price}
                </span>
                {/* <button className="bg-maroon text-white px-4 py-2 rounded-full hover:bg-ungu transition">
                  Adicionar
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
