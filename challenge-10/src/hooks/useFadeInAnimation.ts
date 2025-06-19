import { useState, useEffect, useRef, useCallback } from "react";

type UseFadeInReturn = {
  className: string;
};

const defaultOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: "-50px 0px",
};

// Single element fade-in animation
export const useFadeIn = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
): UseFadeInReturn => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, defaultOptions);

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return {
    className: `transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
  };
};

// List of elements fade-in animation
export const useFadeInList = (count: number) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementsRef = useRef<Array<HTMLElement | null>>(Array(count).fill(null));
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Initialize observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisibleItems(prev => {
        const next = new Set(prev);
        entries.forEach(entry => {
          const index = parseInt((entry.target as HTMLElement).dataset.index || '-1', 10);
          if (index >= 0) {
            entry.isIntersecting ? next.add(index) : next.delete(index);
          }
        });
        return next;
      });
    }, defaultOptions);

    observerRef.current = observer;
    return () => observerRef.current?.disconnect();
  }, []);

  // Update elements and observe them
  const updateElement = useCallback((index: number, element: HTMLElement | null) => {
    if (!observerRef.current) {
      return;
    }

    const oldElement = elementsRef.current[index];
    if (oldElement) {
      observerRef.current.unobserve(oldElement);
    }

    elementsRef.current[index] = element;
    if (element) {
      element.dataset.index = index.toString();
      observerRef.current.observe(element);
    } 
  }, []);

  const getRef = useCallback((index: number) => 
    (element: HTMLElement | null) => updateElement(index, element),
    [updateElement]
  );

  const getClassName = useCallback((index: number) => 
    `transition-opacity duration-1000 ease-out ${visibleItems.has(index) ? 'opacity-100' : 'opacity-0'}`,
    [visibleItems]
  );

  return { getRef, getClassName };
};