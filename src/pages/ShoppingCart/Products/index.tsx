import { FC } from "react";

import useProducts from "./useProducts";
import ProductsList from "./ProductsList";

const ProductsPage:FC = () => {
  
  const { products, loading, search } = useProducts();
  
  return (
    <div className="page-container">
      <p>Welcome to React Shop where you can get all your tools for ReactJS!</p>
      <ProductsList
        loading={loading}
        products={products}
        search={search}
      />
    </div>
  )
}

export default ProductsPage;