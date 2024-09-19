//This component retrieves the product ID from the URL (using useParams),
// finds the matching product from the Redux store (useSelector),
//and renders the ProductItem component with the product’s details.
"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import ProductItem from "@/components/productItem";

const IndividualProductsPage = () => {
  const { items } = useSelector((state) => state.products); // Access the list of products from Redux store.

  const params = useParams(); //for reading dynamic URL parameters
  // Find the product id from the api fetch in Redux that matches the URL parameter ID from useParams.
  // the id that you see in the params (from useParams) comes from the ProductCard link, where each product has its own id
  const clickedProduct = items.filter((item) => item.id == params.id);
  //Render the matched product using the `ProductItem` component
  return clickedProduct.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      imgSrc={product.image}
      imgAlt={product.title}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ));
};

export default IndividualProductsPage;
