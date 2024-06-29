import { useRef } from "react";

const useHome = () => {
  const echartRef = useRef(null);

  return {
    echartRef,
  }
}

export default useHome;