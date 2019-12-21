import { MutableRefObject, useEffect, useRef, useState } from "react";

export type Action = "goBack" | "goForward" | "goTo";
type OnChange = (prevValue: number, newValue: number, action: Action) => any;
type ShouldPageChange = (currentValue: number, newValue: number, action: Action) => boolean;

interface Options {
  totalPages: number;
  defaultPage?: number;
  shouldPageChange?: ShouldPageChange;
  onPageChange?: OnChange;
}

export const preventInfiniteLoop = (currentValue: number, newValue: number, action: string) =>
  !((!currentValue && action === "goBack") || (!newValue && action === "goForward"));

export function usePaging({ totalPages, defaultPage, shouldPageChange, onPageChange }: Options) {
  const lastPage = totalPages > 1 ? totalPages - 1 : 0;
  const savedShouldUpdate: MutableRefObject<ShouldPageChange | null | undefined> = useRef(null);
  const savedOnUpdate: MutableRefObject<OnChange | null | undefined> = useRef(null);
  const prevState: MutableRefObject<{ page: number; action: Action }> = useRef({
    page: typeof defaultPage === "number" ? defaultPage : 0,
    action: "goTo",
  });
  const [currentPage, setCurrentPage] = useState(prevState.current.page);

  useEffect(() => {
    savedShouldUpdate.current = shouldPageChange;
    savedOnUpdate.current = onPageChange;
  });

  useEffect(() => {
    if (savedOnUpdate.current) {
      const { page, action } = prevState.current;
      savedOnUpdate.current(page, currentPage, action);
    }
  }, [currentPage]);

  const conditionalUpdate = (newValue: number, action: Action) => {
    if (!savedShouldUpdate.current || savedShouldUpdate.current(currentPage, newValue, action)) {
      prevState.current = { page: currentPage, action };
      setCurrentPage(newValue);
      return true;
    }
    return false;
  };

  const goBack = () => {
    let newPage = currentPage - 1;
    if (newPage < 0) {
      newPage = lastPage;
    }
    conditionalUpdate(newPage, "goBack");
  };
  const goForward = () => {
    let newPage = currentPage + 1;
    if (newPage > lastPage) {
      newPage = 0;
    }
    conditionalUpdate(newPage, "goForward");
  };
  const goTo = (pageNumber: number) => {
    const action = "goTo";
    if (pageNumber > lastPage) {
      pageNumber = lastPage;
    }
    if (pageNumber < 0) {
      pageNumber = 0;
    }
    conditionalUpdate(pageNumber, action);
  };

  return {
    currentPage,
    goForward,
    goBack,
    goTo,
  };
}
