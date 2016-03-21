// TODO: Break down to ES5(booo) so codility can verify my work.
class CounterManager
{
    constructor (counters) {
        if (counters < 1)
        {
            throw Error('First argument must be > 0');
        }
        this.counters = [];

        for (var i = 0; i < counters; i++) {
            this.counters.push(0);
        }

        this.max = 0;
    }

    increase (index) {
        index--;

        this.counters[index]++;

        this.max = Math.max(this.counters[index], this.max);

    }

    maxCounter () {
        this.counters = this.counters.map( (a) => this.max );
    }
}

export default function maxCounter (N, A) {
    const counterManager = new CounterManager(N);

    for (let i = 0; i < A.length; i++) {
        if ( A[i] <= 0 || A[i] > counterManager.counters.length + 1 )
        {
            continue;
        }

        if ( A[i] === counterManager.counters.length + 1)
        {
            counterManager.maxCounter();
            continue;
        }

        counterManager.increase(A[i]);
    }

    return counterManager.counters;
}
