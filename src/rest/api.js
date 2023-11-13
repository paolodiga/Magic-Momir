import { Cards } from 'scryfall-api';

export function getCards() {
	return new Promise((resolve, reject) => {
    Cards.search('t:creature lang:italian')
			.all()
			.then(result => resolve(result))
      .catch(err => reject(err))
	})
}