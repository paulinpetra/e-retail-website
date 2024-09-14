"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import ProductItem from "@/components/productItem";

const IndividualProductsPage = () => {
  const { items } = useSelector((state) => state.products);

  const params = useParams();
  const router = useRouter();
  const clickedProduct = items.filter((item) => item.id == params.id);

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
