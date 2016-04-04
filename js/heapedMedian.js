import Heap from 'heap';

function calculateMedian (maxHeap, minHeap)
{
    const difference = minHeap.size() - maxHeap.size();

    if (difference === 0)
    {
        return (maxHeap.peek() + minHeap.peek()) / 2;
    }

    if (difference === 1)
    {
        return minHeap.peek();
    }

    return maxHeap.peek();
}

function rebalance (maxHeap, minHeap)
{
    let difference = minHeap.size() - maxHeap.size();

    while (Math.abs(difference) > 1)
    {
        if (difference < -1)
        {
            minHeap.push(maxHeap.pop());
        }
        else
        {
            maxHeap.push(minHeap.pop());
        }

        difference = minHeap.size() - maxHeap.size();
    }
}

export default class HeapedMedian {
    constructor () {
        // Heap to store the numbers <= the median.
        this.maxHeap = new Heap((a, b) => b - a);

        // Heap to store the numbers >= the median.
        this.minHeap = new Heap((a, b) => a - b);

        this.effectiveMedian = null;
    }
    get median ()
    {
        return this.effectiveMedian;
    }
    add (item)
    {
        // Only when both heaps are empty.
        if (this.median === null)
        {
            this.maxHeap.push(item);
        }
        else if (item < this.median)
        {
            this.maxHeap.push(item);
        }
        else if (item > this.median)
        {
            this.minHeap.push(item);
        }

        rebalance(this.maxHeap, this.minHeap);
        this.effectiveMedian = calculateMedian(this.maxHeap, this.minHeap);
    }
}
