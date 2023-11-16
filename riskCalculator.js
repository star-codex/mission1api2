// Function to calculate risk rating
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

	if (inputText.trim() === '') {
		return 'Invalid input. Empty input.';
	}

	// Handle input with only special characters
	if (/^[!@#$%^&*()]+$/.test(inputText)) {
		return 'Invalid input. Special characters only.';
	}

	// Handle input with only numbers
	if (/^\d+$/.test(inputText)) {
		return 'Invalid input. Numbers only.';
	}

	// Handle input with a mixture of special characters and numbers
	if (/^[!@#$%^&*()\d]+$/.test(inputText)) {
		return 'Invalid input. Special characters and numbers mixture.';
	}

	return riskRating;
}

module.exports = calculateRiskRating;
