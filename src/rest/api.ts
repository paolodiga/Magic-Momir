
// @ts-ignore
import { Cards } from 'scryfall-api'
import type { Card } from '../utils/Types'

export function getCards(searchParams: string): Promise<Card | any> {
	return new Promise((resolve, reject) => {
    Cards.search(searchParams)
			.all()
			.then(result => resolve(result))
      .catch(err => reject(err))
	})
}