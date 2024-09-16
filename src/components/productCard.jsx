// Presentational Component for individual product cards
import Link from "next/link";

const ProductCard = ({ product }) => {
  //limit the title of the products to no more than 3 words
  //split title string into 3 words and joining back to a string

  const limitedTitle = product.title.split(" ").slice(0, 3).join(" ");

  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="bg-white border p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
          src={product.image}
          alt={limitedTitle}
          className="w-full h-60 object-contain mb-4"
        />
        <h2 className="text-gray-500 text-sm font-normal uppercase mb-2">
          {limitedTitle}
        </h2>
        <p className="text-gray-700 mb-2">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
