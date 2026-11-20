"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
} from "react";

type Prefill = (interest?: string, machine?: string) => void;

type BookingApi = {
  /** Prefill the meeting form; scrolling is left to the #book link itself. */
  book: Prefill;
  /** The form registers how it applies a prefill. */
  register: (handler: Prefill | null) => void;
};

const BookingContext = createContext<BookingApi>({
  book: () => {},
  register: () => {},
});

export function BookingProvider({ children }: { children: ReactNode }) {
  const handler = useRef<Prefill | null>(null);

  const register = useCallback((next: Prefill | null) => {
    handler.current = next;
  }, []);

  const book = useCallback<Prefill>((interest, machine) => {
    handler.current?.(interest, machine);
    // Lenis glides to #book on the same click; focus once it has arrived,
    // without letting focus() jump the page itself.
    window.setTimeout(() => {
      document
        .getElementById("itme-name")
        ?.focus({ preventScroll: true });
    }, 900);
  }, []);

  const value = useMemo(() => ({ book, register }), [book, register]);

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}

/**
 * A link to the meeting form. Site-wide Lenis handles the smooth scroll to
 * #book; this adds the prefill and the focus on arrival.
 */
export function BookLink({
  interest,
  machine,
  className,
  children,
  ...rest
}: {
  interest?: string;
  machine?: string;
  className?: string;
  children: ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const { book } = useBooking();
  return (
    <a
      href="#book"
      className={className}
      onClick={() => book(interest, machine)}
      {...rest}
    >
      {children}
    </a>
  );
}
