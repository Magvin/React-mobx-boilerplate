import { action, makeObservable, observable, runInAction } from "mobx"
import { Product } from "../../types"
import { getDrinks, getBurgers } from "../order/client/ProductAPI"

export class ProductStore {
  @observable
  drinks: Product[] = []
  @observable
  burgers: Product[] = []
  @observable
  isLoading: boolean = true

  constructor() {
    makeObservable(this)
  }

  @action
  fetchProducts = async () => {
    const drinks = await getDrinks()
    const burgers = await getBurgers()
    runInAction(() => {
      this.drinks = drinks
      this.burgers = burgers
      this.isLoading = false
    })
  }
}
