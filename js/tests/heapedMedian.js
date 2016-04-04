import HeapedMedian from '../heapedMedian';
import assert from 'assert';

describe('heapedMedian', () => {
    let heapedMedian;
    beforeEach(() => {
        heapedMedian = new HeapedMedian();
    });
    it('should have a median of null if nothing is added.', () => {
        assert.equal(heapedMedian.median, null);
    });
    it('should have a median of 1 if only 1 is added.', () => {
        heapedMedian.add(1);
        assert.equal(heapedMedian.median, 1);
    });
    it('should have a median of 1.5 if only 1 and 2 are added.', () => {
        heapedMedian.add(1);
        heapedMedian.add(2);
        assert.equal(heapedMedian.median, 1.5);
    });
    it('should have a median of 2 if 1,2, and 3 are added.', () => {
        heapedMedian.add(1);
        heapedMedian.add(2);
        heapedMedian.add(3);
        assert.equal(heapedMedian.median, 2);
    });
    it('should have a median of 3 if 1,2,3,4,5 are added.', () => {
        heapedMedian.add(1);
        heapedMedian.add(2);
        heapedMedian.add(3);
        heapedMedian.add(4);
        heapedMedian.add(5);
        assert.equal(heapedMedian.median, 3);
    });
    it('should have a median of 4 if 1,2,3,4,5,6,7 are added.', () => {
        heapedMedian.add(1);
        heapedMedian.add(2);
        heapedMedian.add(3);
        heapedMedian.add(4);
        heapedMedian.add(5);
        heapedMedian.add(6);
        heapedMedian.add(7);
        assert.equal(heapedMedian.median, 4);
    });
    it('should have a median of 5 if 1,5,10 are added.', () => {
        heapedMedian.add(1);
        heapedMedian.add(5);
        heapedMedian.add(10);
        assert.equal(heapedMedian.median, 5);
    });
    it('should have a median of -5 if -1,-5,-10 are added.', () => {
        heapedMedian.add(-1);
        heapedMedian.add(-5);
        heapedMedian.add(-10);
        assert.equal(heapedMedian.median, -5);
    });
});
