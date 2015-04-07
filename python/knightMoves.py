import sys

boardsize = 8
rankMax = 8
fileMax = 8

ranks = {
	'a': 1,
	'b': 2,
	'c': 3,
	'd': 4,
	'e': 5,
	'f': 6,
	'g': 7,
	'h': 8
}

ranks_array = [
	None,
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h'
]

knightMoves = [
	(2,1),
	(1,2),
	(-2,1),
	(-1,2),
	(-2,-1),
	(-1,-2),
	(2,-1),
	(1,-2)
]

def isPossibleMove(origin, move):
	numericalCoords = toCoords(origin)
	movedCoords = (numericalCoords[0] + move[0], (numericalCoords[1] + move[1]))
	return movedCoords[0] <= rankMax and movedCoords[0] > 0 and movedCoords[1] <= fileMax and movedCoords[1] > 0

def toShortChessCoords(coords):
	return coords[0] + str(coords[1])

def getPossibleKnightMoves(origin):
	possibleMoves = []
	for move in knightMoves:
		if isPossibleMove(origin,move):
			possibleMoves.append(toShortChessCoords(getChessMoveCoords(origin,move)))
	return possibleMoves

# Returns rank and file format
def toChessCoords(coords):
	return (ranks_array[coords[0]], coords[1])

# Returns numerical format
def toCoords(chessCoords):
	return (ranks[chessCoords[0]], chessCoords[1])

def getChessMoveCoords(origin,move):
	coords = (ranks[origin[0]] + move[0], origin[1] + move[1])
	return (ranks_array[coords[0]], coords[1])

# Open file for reading.
test_cases = open(sys.argv[1], 'r')

for line in test_cases:

	line = line.strip()

	knightChessCoords = (line[0], int(line[1]))

	possibleMoves = sorted(getPossibleKnightMoves(knightChessCoords))

	for move in possibleMoves:
		print(move,end=' ')

	print('')
