const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Function to calculate risk rating (as defined in the previous response)
function calculateRiskRating(inputText) {
	const keywords = ['collide', 'crash', 'scratch', 'bump', 'smash'];
	const lowerInput = inputText.toLowerCase();
	let riskRating = 0;

	keywords.forEach((keyword) => {
		const regex = new RegExp('\\b' + keyword + '\\b', 'gi');
		const matches = lowerInput.match(regex);
		if (matches) {
			riskRating += matches.length;
		}
	});

	return riskRating;
}

// API endpoint to calculate driver rating
app.post('/calculateRating', (req, res) => {
	// Check if the request body contains the required 'text' field
	if (!req.body || !req.body.text) {
		return res
			.status(400)
			.json({ error: 'Invalid input. Missing "text" field.' });
	}

	// Get the text from the request body
	const claimHistory = req.body.text;

	// Call the previously defined calculateRiskRating function
	const riskRating = calculateRiskRating(claimHistory);

	// Map the risk rating to a suggested driver rating (1 to 5)
	const suggestedRating = Math.max(1, 5 - riskRating);

	// Send the result in JSON format
	res.json({ suggestedRating });
});

// Only start the server if the script is run directly
if (require.main === module) {
	const server = app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
	// Export the app and server for testing purposes
	module.exports = { app, server, calculateRiskRating };
} else {
	// If required as a module, export only the app
	module.exports = app;
}