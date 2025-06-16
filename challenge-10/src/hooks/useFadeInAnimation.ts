import { useState, useEffect, useRef, useCallback } from "react";

type UseFadeInReturn = {
  isVisible: boolean;
  className: string;
};

export const useFadeIn = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "-50px 0px",
  }
): UseFadeInReturn => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  const baseClasses = "transition-opacity duration-3000 ease-out";
  const visibilityClass = isVisible ? "opacity-100" : "opacity-0";
  const className = `${baseClasses} ${visibilityClass}`;

  return {
    isVisible,
    className,
  };
};

type UseFadeInListReturn = {
  getRef: (index: number) => (el: HTMLElement | null) => void;

  getClassName: (index: number) => string;
};

export const useFadeInList = (
  count: number,
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: "-50px 0px",
  }
): UseFadeInListReturn => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementsRef = useRef<Array<HTMLElement | null>>(Array(count).fill(null));
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Create a stable reference to the options object
  const optionsRef = useRef(options);
  optionsRef.current = options;

  // Initialize the observer only once
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const index = parseInt(
          entry.target.getAttribute("data-index") || "-1",
          10
        );
        if (index === -1) return;

        setVisibleItems((prev) => {
          const next = new Set(prev);
          if (entry.isIntersecting) {
            next.add(index);
          } else {
            next.delete(index);
          }
          return next;
        });
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, optionsRef.current);
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  // Update elements and observe them
  const updateElement = useCallback((index: number, element: HTMLElement | null) => {
    // Unobserve the old element if it exists
    const oldElement = elementsRef.current[index];
    if (oldElement && observerRef.current) {
      observerRef.current.unobserve(oldElement);
    }

    // Update the ref
    elementsRef.current[index] = element;

    // Observe the new element if it exists
    if (element && observerRef.current) {
      element.dataset.index = index.toString();
      observerRef.current.observe(element);
    }
  }, []);

  const getRef = useCallback((index: number) => (element: HTMLElement | null) => {
    updateElement(index, element);
  }, [updateElement]);
  const getClassName = (index: number) => {
    const baseClasses = "transition-opacity duration-1000 ease-out";
    const visibilityClass = visibleItems.has(index)
      ? "opacity-100"
      : "opacity-0";
    return `${baseClasses} ${visibilityClass}`;
  };

  return {
    getRef,
    getClassName,
  };
};
