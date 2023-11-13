import { Cards } from 'scryfall-api';

export function getCards(): Promise<any> {
	return new Promise((resolve, reject) => {
		Cards.random().then(result => {
			console.log(result)
		});

		Cards.search('t:creature lang:italian cmc=1')
			.all()
			.then(result => console.log(result));
		Cards.search('t:creature lang:italian cmc=2')
			.all()
			.then(result => console.log(result));

		resolve([])
	})
}