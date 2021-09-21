import React from "react"
import "./App.css"
import { OrderForm } from "./features/order/OrderForm"
import { configure } from "mobx"

configure({ enforceActions: "always" })

function App() {
  return <OrderForm />
}

export default App
