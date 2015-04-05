import sys

# Open file for reading.
test_cases = open(sys.argv[1], 'r')

for line in test_cases:
	print(str(int(line,16)))