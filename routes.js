const app = require('server.js');

// request handlers go here
// basic array included

app.get('/', (req, res, next) => {
	res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
});
