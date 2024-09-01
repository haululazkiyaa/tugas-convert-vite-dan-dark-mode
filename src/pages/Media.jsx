import MediaCard from "../components/MediaCard";
import { mediaItems } from "../data/media";

const Media = () => {
  return (
    <section className="h-full mx-10 my-10 lg:my-20 xl:my-20 lg:mx-40 xl:mx-40">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-[#ffffff] mb-2">
        Media
      </h1>
      <p className="text-gray-600 dark:text-[#ffffff] mb-8">
        Informasi seputar PaDi UMKM
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((item, index) => (
          <MediaCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Media;
