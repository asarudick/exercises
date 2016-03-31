
export const mazeCellType = {
    clear: 0,
    obstruction: 1,
    exit: 2
};

export class MazeError {
    constructor (message) {
        this.name = 'MazeError';
        this.message = message;
        this.stack = (new Error()).stack;
    }
}
export class Maze {
    constructor (cells, start)
    {
        if (!cells || !cells.length)
        {
            throw new MazeError('Maze cannot be empty.');
        }

        if (!start || (start[0] > cells.length - 1 || start[1] > cells[0].length - 1))
        {
            throw new MazeError('Start must be an integer array of size 2.');
        }

        this.cells = cells;
        this.start = start;

        this.width = this.cells ? this.cells.length : 0;
        this.height = this.cells.length ? this.cells[0].length : 0;


        // Really should throw error here.
    }

    findShortestPath () {
        if (!this.width || !this.height)
        {
            return [];
        }

        const queue = [];
        const visited = {};
        const predecessor = {};
        let exit = [ -1, -1 ];
        const toKey = (a, b) => a.toString() + ',' + b.toString();

        visited[ toKey(this.start[0], this.start[1]) ] = true;
        predecessor[ toKey(this.start[0], this.start[1]) ] = [ -1, -1 ];

        queue.push(this.start);

        while (queue.length)
        {
            const [ x, y ] = queue.shift();

            if (this.cells[x][y] === mazeCellType.obstruction)
            {
                continue;
            }
            
            if (this.cells[x][y] === mazeCellType.exit)
            {
                exit = [ x, y ];
                break;
            }

            if ( x - 1 >= 0
                && !visited[ toKey(x - 1, y) ])
            {
                visited[ toKey(x - 1, y) ] = true;
                predecessor[ toKey(x - 1, y) ] = [ x, y ];
                queue.push([ x - 1, y ]);
            }

            if ( y - 1 >= 0
                && !visited[ toKey(x, y - 1) ])
            {
                visited[ toKey(x, y - 1) ] = true;
                predecessor[ toKey(x, y - 1) ] = [ x, y ];
                queue.push([ x, y - 1 ]);
            }

            if ( x + 1 < this.width
                && !visited[ toKey(x + 1, y) ])
            {
                visited[ toKey(x + 1, y) ] = true;
                predecessor[ toKey(x + 1, y) ] = [ x, y ];
                queue.push([ x + 1, y ]);
            }

            if ( y + 1 < this.height
                && !visited[ toKey(x, y + 1) ])
            {
                visited[ toKey(x, y + 1) ] = true;
                predecessor[ toKey(x, y + 1) ] = [ x, y ];
                queue.push([ x, y + 1 ]);
            }

        }

        const path = [];

        {
            let cell = Array.prototype.slice.call(exit);

            while (cell[0] !== -1 && cell[1] !== -1)
            {
                path.push(cell);
                cell = predecessor[ toKey(cell[0], cell[1]) ];
            }
        }

        return path.reverse();

    }

    findPath ()
    {
        if (!this.width || !this.height)
        {
            return [];
        }

        // The solution path.
        let path = [];

        // Record of what has been visited.
        let visited = {};

        this.findPathRecurse(this.start[0], this.start[1], path, visited);

        return path;
    }

    findPathRecurse(x, y, path, visited)
    {

        // Save lookup time.
        const cell = this.cells[x][y];

        if (cell === mazeCellType.obstruction )
        {
            return false;
        }

        // Tentatively set this as the solution path.
        path.push([ x, y ]);
        visited[ x.toString() + ',' + y.toString() ] = true;

        if ( cell === mazeCellType.exit )
        {
            return true;
        }

        // For each direction, check for out of bounds, and whether we've been in the cell, and recursively determine if a solution path follows from it.
        if (x - 1 >= 0
            && !visited[ (x - 1).toString() + ',' + y.toString() ]
            && this.findPathRecurse(x - 1, y, path, visited))
        {
            return true;
        }

        if (y - 1 >= 0
            && !visited[ x.toString() + ',' + (y - 1).toString() ]
            && this.findPathRecurse(x, y - 1, path, visited))
        {
            return true;
        }

        if (x + 1 < this.width
            && !visited[ (x + 1).toString() + ',' + y.toString() ]
            && this.findPathRecurse(x + 1, y, path, visited))
        {
            return true;
        }

        if (y + 1 < this.height
            && !visited[ x.toString() + ',' + (y + 1).toString() ]
            && this.findPathRecurse(x, y + 1, path, visited))
        {
            return true;
        }

        // By this point, none of the above conditions evaluated to true, thus this cell does not meet the criteria to be considered
        // part of the path, so remove it.
        path.pop();
        visited[ x.toString() + ',' + y.toString() ] = false;

        return false;
    }
}
