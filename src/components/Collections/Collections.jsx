import Image from "next/image";
import Link from "next/link";

export default function Collections() {
  const items = [
    {
      img: "/assets/Winter-Collection.avif",
      text: "Winter Collection",
      link: "/winter-collection",
    },
    {
      img: "/assets/Mens-Collection.webp",
      text: "Men's Collection",
      link: "/men-collection",
    },
    {
      img: "/assets/Women-Collection.jpg",
      text: "Women's Collection",
      link: "/women-collection",
    },
    {
      img: "/assets/Kids-Collection.webp",
      text: "Kids Collection",
      link: "/kids-collection",
    },
    {
      img: "/assets/Boys-Collection.jpg",
      text: "Boys Collection",
      link: "/boys-collection",
    },
    {
      img: "/assets/Girls-Collection.jpg",
      text: "Girls Collection",
      link: "/girls-collection",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {items.map((item, i) => (
          <Link href={item.link} key={i}>
            <div
              className="
                relative flex-shrink-0
                w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64
                rounded-full overflow-hidden cursor-pointer shadow-xl
              "
            >
              <Image
                src={item.img}
                alt={item.text}
                fill
                className="object-cover rounded-full group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500">
                <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold text-center px-2">
                  {item.text}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
