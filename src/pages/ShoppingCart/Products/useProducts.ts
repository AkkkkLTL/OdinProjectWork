import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getProducts } from "@/redux/ShoppingCart/ProductsSlice";
import type { RootState } from "@/redux/ShoppingCart/types";

const useProducts = () => {
  // Local State
  const [search, setSearch] = useState<string>("");

  // Redux State
  const products = useSelector((state:RootState) => state.products.products);
  const loading = useSelector((state:RootState) => state.products.productsLoading);
  const dispatch = useDispatch();

  // Router Location
  const location = useLocation();

  // Get products loading page
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // Update Search content
  useEffect(() => {
    const searchParam = new URLSearchParams(location.search);
    const search = searchParam.get("search") || "";
    setSearch(search);
  }, [location.search]);

  return {
    search,
    products,
    loading
  }

}

export default useProducts;