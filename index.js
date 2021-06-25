require('dotenv').config();
const Alpaca = require('@alpacahq/alpaca-trade-api');

const date = new Date();

const alpaca = new Alpaca({
	keyId: process.env.API_KEY,
	secretKey: process.env.API_SECRET,
	paper: true,
	usePolygon: false,
});

// alpaca.getCalendar({ start: date, end: date }).then((res) => {
// 	console.log(res);
// });

alpaca.getAccount().then((account) => {
	console.log('Current Account:', account);
});

function addTicker(symbol) {
	let accountId;

	alpaca.getWatchlists(symbol).then((response) => {
		accountId = response[0].id;

		if (symbol) {
			alpaca.addToWatchlist(accountId, symbol);
		}
	});
}

addTicker('AAPL');
