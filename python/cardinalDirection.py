import sys

lines = open(sys.argv[1], 'r')

def getDirection(O,P,Q,R):

	# Get the directional vector
	(x,y) = (Q - O, R - P)

	if( (x,y) == (0,0) ):
		return "here"

	xDirection = ''

	if x > 0:
		xDirection = 'E'
	elif x < 0:
		xDirection = 'W'


	yDirection = ''

	if y > 0:
		yDirection = 'N'
	elif y < 0:
		yDirection = 'S'

	return yDirection + xDirection



for line in lines:
	print(getDirection(*[int(x) for x in line.strip().split()]))
