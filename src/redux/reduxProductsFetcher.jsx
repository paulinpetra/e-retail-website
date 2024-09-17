//the only purpose of this component is to trigger the fetchProducts action when needed.
"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";

const AllProductsFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch all products on mount
  }, [dispatch]);

  return null;
};

export default AllProductsFetcher;
