import React from "react"

export const BasketList = () => {
  const basket = []

  if (!basket.length) {
    return <p>No orders</p>
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Drink</th>
          <th>Burger</th>
          <th>Total Price</th>
        </tr>
      </thead>
    </table>
  )
}
