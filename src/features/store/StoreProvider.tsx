import React, { createContext, PropsWithChildren } from "react"
import { ProductStore } from "./ProductStore"

type StoreContextValue = {
  productStore: ProductStore
}

export const StoreContext = createContext<StoreContextValue>({} as StoreContextValue)

export const StoreProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const productStore = new ProductStore()

  return <StoreContext.Provider value={{ productStore }}>{children}</StoreContext.Provider>
}
