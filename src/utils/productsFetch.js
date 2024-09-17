//The function that handles the API server-side logic for fetching all products
//in separate file because of reusability and separation of concerns
export const productsFetch = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
