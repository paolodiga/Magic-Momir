import { getCards } from "@/rest/api"

export class CardStore {
  cards = null

  updateCards() {
    getCards()
    .then(resp => {
      resp.forEach(element => {
        console.log(element)
      });
    })
  }

  constructor() {}
}