"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./productsSlice";

const AllProductsFetcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch all products on mount
  }, [dispatch]);

  return null; // This component does not render anything
};

export default AllProductsFetcher;
