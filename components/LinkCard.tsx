import Image from "next/image";

export default function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-2 w-full rounded-md hover:scale-105 transition-transform bg-white dark:bg-gray-800 mb-4 shadow-lg max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm w-10 h-10 object-cover"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10]">
          {title}
        </h2>
      </div>
    </a>
  );
}
