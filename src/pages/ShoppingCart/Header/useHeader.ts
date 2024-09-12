import { RootState } from "@/redux/ShoppingCart/types";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const useHeader = () => {

  // Local State
  const [search, setSearch] = useState<string>("");

  // Redux State
  const basketCount = useSelector((state:RootState) => state.basket.products.length);

  // Router Setting
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSearch(searchParams.get("search") || "");
  }, []);

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }

  const handleSearchKeydown = (e:KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter")
      navigate(`./products?search=${search}`);
  }

  return {
    search, basketCount,
    handleSearchChange,
    handleSearchKeydown
  }
}

export default useHeader;