import sys

test_cases = open(sys.argv[1], 'r')

for line in test_cases:

	line = line.strip()

	if line == '':
		continue

	if len(line) > 55:

		line = line[:40]

		if line.rfind(' ') != -1:
			line = line[:line.rfind(' ')]

		line += '... <Read More>'

	print(line)
