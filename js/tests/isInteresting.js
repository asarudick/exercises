import { isInteresting, isZeroes, isIncrementing, isDecrementing, isSameDigit, isPalindrome, isAwesomePhrase } from '../isInteresting';
import assert from 'assert';

describe('isInteresting', () => {
    describe('isZeroes', () => {
        it('0 should return false', () => {
            const test = 0;
            const result = isZeroes(test);
            assert.equal(result, false);
        });
        it('100 should return true', () => {
            const test = 100;
            const result = isZeroes(test);
            assert.equal(result, true);
        });
        it('200 should return true', () => {
            const test = 200;
            const result = isZeroes(test);
            assert.equal(result, true);
        });
        it('300 should return true', () => {
            const test = 300;
            const result = isZeroes(test);
            assert.equal(result, true);
        });
        it('1001 should return false', () => {
            const test = 1001;
            const result = isZeroes(test);
            assert.equal(result, false);
        });
    });
    describe('isSameDigit', () => {
        it('1 should return true', () => {
            const test = 1;
            const result = isSameDigit(test);
            assert.equal(result, true);
        });
        it('11 should return true', () => {
            const test = 11;
            const result = isSameDigit(test);
            assert.equal(result, true);
        });
        it('111 should return true', () => {
            const test = 111;
            const result = isSameDigit(test);
            assert.equal(result, true);
        });
        it('112 should return false', () => {
            const test = 112;
            const result = isSameDigit(test);
            assert.equal(result, false);
        });
        it('222 should return true', () => {
            const test = 222;
            const result = isSameDigit(test);
            assert.equal(result, true);
        });
    });
    describe('isIncrementing', () => {
        it('1 should return true', () => {
            const test = 1;
            const result = isIncrementing(test);
            assert.equal(result, true);
        });
        it('123 should return true', () => {
            const test = 123;
            const result = isIncrementing(test);
            assert.equal(result, true);
        });
        it('2345 should return true', () => {
            const test = 2345;
            const result = isIncrementing(test);
            assert.equal(result, true);
        });
        it('321 should return false', () => {
            const test = 321;
            const result = isIncrementing(test);
            assert.equal(result, false);
        });
        it('890 should return true', () => {
            const test = 890;
            const result = isIncrementing(test);
            assert.equal(result, true);
        });
    });
    describe('isDecrementing', () => {
        it('1 should return true', () => {
            const test = 1;
            const result = isDecrementing(test);
            assert.equal(result, true);
        });
        it('321 should return true', () => {
            const test = 321;
            const result = isDecrementing(test);
            assert.equal(result, true);
        });
        it('5432 should return true', () => {
            const test = 5432;
            const result = isDecrementing(test);
            assert.equal(result, true);
        });
        it('123 should return false', () => {
            const test = 123;
            const result = isDecrementing(test);
            assert.equal(result, false);
        });
        it('3210 should return true', () => {
            const test = 3210;
            const result = isDecrementing(test);
            assert.equal(result, true);
        });
        it('32109 should return false', () => {
            const test = 32109;
            const result = isDecrementing(test);
            assert.equal(result, false);
        });
    });
    describe('isPalindrome', () => {
        it('1 should return true', () => {
            const test = 1;
            const result = isPalindrome(test);
            assert.equal(result, true);
        });
        it('11 should return true', () => {
            const test = 11;
            const result = isPalindrome(test);
            assert.equal(result, true);
        });
        it('101 should return true', () => {
            const test = 101;
            const result = isPalindrome(test);
            assert.equal(result, true);
        });
        it('1001 should return true', () => {
            const test = 1001;
            const result = isPalindrome(test);
            assert.equal(result, true);
        });
        it('1002 should return false', () => {
            const test = 1002;
            const result = isPalindrome(test);
            assert.equal(result, false);
        });
    });
    it('100 should return 2', () => {
        const test = 100;
        const result = isInteresting(test);
        assert.equal(result, 2);
    });
    it('101 should return 2', () => {
        const test = 101;
        const result = isInteresting(test);
        assert.equal(result, 2);
    });
    it('102 should return 0', () => {
        const test = 102;
        const result = isInteresting(test);
        assert.equal(result, 0);
    });
    it('109 should return 1', () => {
        const test = 109;
        const result = isInteresting(test);
        assert.equal(result, 1);
    });
    it('110 should return 1', () => {
        const test = 110;
        const result = isInteresting(test);
        assert.equal(result, 1);
    });
});
