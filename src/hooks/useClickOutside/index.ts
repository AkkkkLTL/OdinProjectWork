import { RefObject, useEffect } from "react";

/**
 * 
 * 
 * @param condition Whether the element is present on the page or not
 * @param ref Ref to the object you want to hide
 * @param todo Action to be taken when click
 */
const useClickOutside = (
  condition: boolean,
  ref: RefObject<HTMLElement>,
  todo: () => void,
) => {
  const handleClickOutside = (e: Event) => {
    if (condition && !ref.current?.contains(e.target as HTMLElement))
      todo();
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  },[]);
}
export default useClickOutside;