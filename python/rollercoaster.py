import sys
import re

test_cases = open(sys.argv[1],'r')

letter = re.compile("[A-Za-z]{1}")

for line in test_cases:

	chars = list(line)

	upper = True

	for char in chars:

		if not letter.match(char):
			print(char,end="")
			continue

		if upper:
			print(char.upper(),end="")
		else:
			print(char.lower(),end="")

		upper = not upper
