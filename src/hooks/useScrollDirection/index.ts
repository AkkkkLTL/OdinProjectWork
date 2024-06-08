import { useCallback, useEffect, useRef, useState } from "react"

/**
 * 
 * @returns {string} return the scroll direction
 */
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('');
  const lastScrollYRef = useRef(window.scrollY);

  const updateScrollDirection = useCallback(() => {
    const scrollToY = window.scrollY;
    const direction = scrollToY > lastScrollYRef.current ? 'down' : 'up';
    if (direction !== scrollDirection &&
      (scrollToY - lastScrollYRef.current > 10 ||
      scrollToY - lastScrollYRef.current < -10)
    ) {
      setScrollDirection(direction);
    }

  },[scrollDirection]);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    }
  }, [updateScrollDirection]);

  return scrollDirection;
}
export default useScrollDirection;