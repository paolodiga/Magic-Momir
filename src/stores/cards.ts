import { getCards } from '@/rest/api'

class CardsStore {
  private _cards: any[] | null = null

  get cards() {
    if (this._cards === null) {
      getCards()
        .then(res => console.log(res))
    }
    return this._cards
  }

  constructor() {}
}

let cardsStore = new CardsStore()
export default cardsStore;