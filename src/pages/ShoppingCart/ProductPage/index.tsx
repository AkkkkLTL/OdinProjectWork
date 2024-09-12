import { FC } from "react";
import useProductPage from "./useProductPage";
import Product from "./Product";

const ProductPage:FC = () => {

  const {
    product, loading, added,
    blocker,
    handleAddClick
  } = useProductPage();

  return (
    <div className="page-container">
      {product || loading ? (
        <Product
          loading={loading}
          product={product}
          inBasket={added}
          onAddtoBasket={handleAddClick}
        />
      ) : (
        <p>Product not Found!</p>
      )}
      {blocker.state === "blocked" ? (
        <div>
          <p>Are you sure you leave without buying this product?</p>
          <button onClick={() => blocker.proceed()}>
            Proceed
          </button>
          <button onClick={() => blocker.reset()}>
            Cancel
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default ProductPage;