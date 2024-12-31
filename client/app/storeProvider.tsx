'use client'
import { AppStore, makeStore } from "@/lib/store";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ReactNode, useEffect, useRef } from "react";
import { Provider } from "react-redux";

interface ProviderProps {
    children: ReactNode
}

export default function StoreProvider({ children }: ProviderProps) {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  useEffect(() => {
    if (storeRef.current != null) {
        const unsubscribe = setupListeners(storeRef.current.dispatch)
        return unsubscribe
    }
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}