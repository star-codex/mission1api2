const request = require('supertest');
const { server, app } = require('./app');

// The following code ensures that the server is started before any tests run and closed after all tests have completed.

// Hook to start the server before running tests
beforeAll((done) => {
	server.listen(3000, () => {
		done();
	});
});

// Hook to close the server after running tests
afterAll((done) => {
	server.close(() => {
		done();
	});
});

// API endpoint tests

describe('API endpoint /calculateRating', () => {
	it('should return a valid response with suggested rating', async () => {
		const claimHistory = 'The driver has no claim history.';

		const response = await request(app)
			.post('/calculateRating')
			.send({ text: claimHistory })
			.expect(200);

		expect(response.body).toHaveProperty('suggestedRating');
		expect(typeof response.body.suggestedRating).toBe('number');
		expect(response.body.suggestedRating).toBeGreaterThanOrEqual(1);
		expect(response.body.suggestedRating).toBeLessThanOrEqual(5);
	});

	it('should handle invalid input and return a 400 error', async () => {
		const response = await request(app)
			.post('/calculateRating')
			.send({})
			.expect(400);

		expect(response.body).toHaveProperty('error');
		expect(response.body.error).toBe('Invalid input. Missing "text" field.');
	});
});
