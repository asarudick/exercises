import sys

def greatestN(x, n):

	coef = 0;

	while (coef * n) < x:
		coef += 1

	return coef*n



test_cases = open(sys.argv[1], 'r')

for line in test_cases:
	if line == '':
		continue

	args = line.split(',')

	print( greatestN(int(args[0]),int(args[1])) )
