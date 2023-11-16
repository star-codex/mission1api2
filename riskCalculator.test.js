const calculateRiskRating = require('./riskCalculator');

describe('riskCalculator function', () => {
	it('should handle missing input and return 0', () => {
		const result = calculateRiskRating();
		expect(result).toBe(0);
	});

	it('should handle empty input and return 0', () => {
		const result = calculateRiskRating('');
		expect(result).toBe(0);
	});

	it('should handle input with no matches and return 0', () => {
		const result = calculateRiskRating('The driver has a clean history.');
		expect(result).toBe(0);
	});

	it('should handle input with uppercase matches and return correct count', () => {
		const result = calculateRiskRating(
			'Crash, scratch, and bump. Crash again.'
		);
		expect(result).toBe(4);
	});
});
