"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ConsultationContextType {
  open: boolean;
  preselectedPrinter: string;
  openModal: (printer?: string) => void;
  closeModal: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | null>(null);

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preselectedPrinter, setPreselectedPrinter] = useState("");

  const openModal = (printer = "") => {
    setPreselectedPrinter(printer);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ConsultationContext.Provider value={{ open, preselectedPrinter, openModal, closeModal }}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) throw new Error("useConsultation must be used within ConsultationProvider");
  return ctx;
}
