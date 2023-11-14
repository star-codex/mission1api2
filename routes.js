const app = require('server.js');
const supertest = require('supertest');
const request = supertest(app);

// request handlers go here
// basic array included

app.get('/', (req, res, next) => {
	res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
});
