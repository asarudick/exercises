import sys
import re

# Open file for reading.
test_cases = open(sys.argv[1], 'r')

for line in test_cases:
	print(re.sub(r'(.)\1+', r'\1', line.strip()))