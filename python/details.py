import sys

test_cases = open(sys.argv[1],'r')

for line in test_cases:

	# Strip new line at end
	line = line.strip()

	# Load details into a rectangular matrix
	matrix = line.split(',')

	replacements = 0
	while True:

		fin = False

		for col in range(len(matrix)):
			row = matrix[col]
			if '.Y' in row and not 'XY' in row:
				matrix[col] = row.replace('.Y', 'Y')
			else:
				fin = True
				break

		if fin:
			break

		replacements += 1

	print(replacements)
