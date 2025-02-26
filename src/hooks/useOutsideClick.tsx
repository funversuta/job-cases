import { useState, useEffect, useRef } from 'react';

const useOutsideClick = <T extends HTMLElement>(initialValue: boolean) => {
  const [isActive, setIsActive] = useState<boolean>(initialValue);
  const ref = useRef<T>(null); // Используем обобщение для рефа

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return { ref, isActive, setIsActive };
};

export default useOutsideClick;
