import validateDependencies from '../validateDependencies';
import assert from 'assert';

describe('validateDependencies', () => {
    it('should return b, a for projects: a, b, dependencies: (b, a)', () => {
        const projects = [ 'a', 'b' ];
		const dependencies = [
			[ 'b', 'a' ]
		];

		const result = validateDependencies(projects, dependencies);
		assert.deepEqual(result, [ 'b', 'a' ]);
    });
    it('should return c, b, a for projects: a, b, c, dependencies: (b, a), (c, b)', () => {
        const projects = [ 'a', 'b', 'c' ];
		const dependencies = [
			[ 'b', 'a' ],
			[ 'c', 'b' ]
		];

		const result = validateDependencies(projects, dependencies);
		assert.deepEqual(result, [ 'c', 'b', 'a' ]);
    });
    it('should return d, c, b, a for projects: a, b, c, dependencies: (d, c), (b, a), (c, b)', () => {
        const projects = [ 'a', 'b', 'c', 'd' ];
		const dependencies = [
			[ 'd', 'c' ],
			[ 'b', 'a' ],
			[ 'c', 'b' ]
		];

		const result = validateDependencies(projects, dependencies);
		assert.deepEqual(result, [ 'd', 'c', 'b', 'a' ]);
    });
    it('should return d, c, b, a for projects: a, b, c, dependencies: (d, c), (b, a), (c, a), (c, b)', () => {
        const projects = [ 'a', 'b', 'c', 'd' ];
		const dependencies = [
			[ 'd', 'c' ],
			[ 'b', 'a' ],
			[ 'c', 'a' ],
			[ 'c', 'b' ]
		];

		const result = validateDependencies(projects, dependencies);
		assert.deepEqual(result, [ 'd', 'c', 'b', 'a' ]);
    });
});
