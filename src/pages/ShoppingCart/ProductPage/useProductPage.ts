import { ADD } from "@/redux/ShoppingCart/BasketSlice";
import { getProduct } from "@/redux/ShoppingCart/ProductsSlice";
import { RootState } from "@/redux/ShoppingCart/types"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useBlocker, useParams } from "react-router-dom";

const useProductPage = () => {
  // Redux State
  const added = useSelector((state:RootState) => state.basket.products.some(p => state.products.currentProduct ? p.id === state.products.currentProduct.id : false));
  const basketProducts = useSelector((state:RootState) => state.basket.products);
  const loading = useSelector((state:RootState) => state.products.productsLoading);
  const product = useSelector((state: RootState) => state.products.currentProduct || undefined);

  const dispatch = useDispatch();

  // Router Setting
  const { id } = useParams();
  const blocker = useBlocker(
    ({currentLocation, nextLocation}) => !added && currentLocation.pathname !== nextLocation.pathname,
  );

  useEffect(() => {
    if (id) {
      const paramId = parseInt(id, 10);
      dispatch(getProduct(paramId));
    }
  }, []);

  const handleAddClick = () => {
    if (product) {
      dispatch(ADD({product}));
    }
  }

  return {
    added,
    basketProducts,
    loading,
    product,
    handleAddClick,
    blocker
  }
}

export default useProductPage;