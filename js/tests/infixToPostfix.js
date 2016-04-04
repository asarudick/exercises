import infixToPostfix from '../infixToPostfix';
import assert from 'assert';

describe('infixToPostfix', () => {
    it('should return \'AB+\' for \'A+B\'', () => {
        const testStr = 'A+B';
        const result = infixToPostfix(testStr);
        assert.equal(result, 'AB+');
    });
    it('should not care about spaces and return \'AB+\' for \'A + B\'', () => {
        const testStr = 'A + B';
        const result = infixToPostfix(testStr);
        assert.equal(result, 'AB+');
    });
    it('should return \'ABC*+\' for \'A+B*C\'', () => {
        const testStr = 'A+B*C';
        const result = infixToPostfix(testStr);
        assert.equal(result, 'ABC*+');
    });
    it('should handle parentheses and return \'AB+C*\' for \'(A+B)*C\'', () => {
        const testStr = '(A+B)*C';
        const result = infixToPostfix(testStr);
        assert.equal(result, 'AB+C*');
    });
    it('should return \'ABC/DE+*+F\' for \'(A+B/C*(D+E)-F)\'', () => {
        const testStr = '(A+B/C*(D+E)-F)';
        const result = infixToPostfix(testStr);
        assert.equal(result, 'ABC/DE+*+F-');
    });
});
