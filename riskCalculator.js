// Function to calculate risk rating
function calculateRiskRating(inputText) {
	const keywords = ['collide', 'crash', 'scratch', 'bump', 'smash'];
	const lowerInput = inputText.toLowerCase();
	let riskRating = 1;

	keywords.forEach((keyword) => {
		const regex = new RegExp('\\b' + keyword + '\\b', 'gi');
		const matches = lowerInput.match(regex);
		if (matches) {
			riskRating += matches.length;
		}
	});

	return riskRating;
}

module.exports = calculateRiskRating;
