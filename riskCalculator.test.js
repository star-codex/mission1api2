const calculateRiskRating = require('./riskCalculator');

describe('riskCalculator function', () => {
	it('should handle input with uppercase matches and return correct count', () => {
		const result = calculateRiskRating(
			'Crash, scratch, and bump. Crash again.'
		);
		expect(result).toBe(4);
	});

	it('should handle empty input and return an error message', () => {
		const result = calculateRiskRating('');
		expect(result).toBe('Invalid input. Empty input.');
	});

	it('should handle input with only special characters and return an error message', () => {
		const result = calculateRiskRating('!@#$%^&*()');
		expect(result).toBe('Invalid input. Special characters only.');
	});

	it('should handle input with only numbers and return an error message', () => {
		const result = calculateRiskRating('12345');
		expect(result).toBe('Invalid input. Numbers only.');
	});

	it('should handle input with a mixture of special characters and numbers and return an error message', () => {
		const result = calculateRiskRating('1!2@3#4$5%');
		expect(result).toBe(
			'Invalid input. Special characters and numbers mixture.'
		);
	});
});
