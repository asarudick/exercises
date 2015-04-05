import sys

# Open file for reading.
test_cases = open(sys.argv[1], 'r')

for line in test_cases:
	numbers = line.split()
	
	floats = sorted([float(x) for x in numbers])
	print(" ".join([str.format('{0:.3f}',x) for x in floats]))