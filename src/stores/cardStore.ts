import { defineStore } from 'pinia'
import { getCards } from '../rest/api'
import type { Card, Creatures } from '../utils/Types'
import { Actions } from '../utils/Enums'

const useCardStore = defineStore('card', {
  state: () => {
    const cards: Creatures = {}
    const graveyard: Card[] = []
    const exile: Card[] = []
    const hand: (Card | any)[] = []
    const deck: string[] = []
    const language: string = navigator.language === "it" ? "italian" : "english"
    return { cards, language, graveyard, exile, deck, hand }
  },

  actions: {
    getCreatures() {
      getCards(`t:creature lang:${this.language}`)
        .then((resp: Card[]): void => {
          console.clear()
          resp.forEach((element: Card) => {
            // @ts-ignore
            if (!this.cards[`cmc${element.cmc}`]) this.cards[`cmc${element.cmc}`] = []
            // @ts-ignore
            this.cards[`cmc${element.cmc}`]?.push(element)
          });
        })
        .catch(() => this.getCreatures())
    },
    getLands() {
      getCards(`t:basic t:land -t:snow lang:${this.language}`)
        .then((resp: Card[]): void => {
          console.clear()
          resp.forEach(land => {
            window.open(land.image_uris.normal)
          })
        })
        .catch(() => this.getLands())
    },
    updateLanguage(lang: string) { this.language = lang },
    actions(action: Actions, target?: Card) {
      switch(action) {
        case Actions.CREATE_DECK:
          this.deck = []
          break;
        case Actions.DRAW_7:
          for (let i = 0; i < 7; i++) {
            this.hand.push(this.deck.pop())
          }
          break;
        case Actions.DISCARD_CARD:
          if (target) {
            this.hand = this.hand.filter((card: Card) => {
              if (card.id === target.id) {
                this.graveyard.push(card)
                return false
              }
              return true
            })
          }
          break;
      }
    }
  },
})
export default useCardStore