import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useStores } from "../store/hooks"
import { useObserver } from "mobx-react-lite"

export const OrderForm = () => {
  const { productStore } = useStores()
  const { fetchProducts } = productStore

  useEffect(() => {
    fetchProducts()
  }, [])

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log({ data })
  })

  return useObserver(() => {
    const { isLoading, drinks, burgers } = productStore

    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Make an order</legend>
          <label htmlFor="drink">Drink</label>
          <select {...register("drink")} id="drink" name="drink">
            {drinks.map((drink) => (
              <option key={drink.name} value={drink.name}>
                {drink.displayName} -${drink.price}
              </option>
            ))}
          </select>
          <label htmlFor="burger">Burger</label>
          <select {...register("burger")} id="burger" name="burger">
            {burgers.map((burger) => (
              <option key={burger.name} value={burger.name}>
                {burger.displayName} -${burger.price}
              </option>
            ))}
          </select>
          <button>Submit</button>
        </fieldset>
      </form>
    )
  })
}
