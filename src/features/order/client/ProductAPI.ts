import { Product } from "../../../types"

export const getDrinks = async (): Promise<Product[]> => [
  { name: "cola", displayName: "Coca Cola", price: 0.99 },
  { name: "pepsi", displayName: "Pepsi", price: 0.89 },
  { name: "7zip", displayName: "7zip", price: 1.19 },
]

export const getBurgers = async (): Promise<Product[]> => [
  { name: "beef", displayName: "Beef Burger", price: 0.99 },
  { name: "cheesburger", displayName: "Chees Burger", price: 0.89 },
  { name: "doublebeef", displayName: "Double Beef Burger", price: 2.19 },
]
