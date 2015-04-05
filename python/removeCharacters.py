import sys
import re

def removeCharacters(sentence, chars):
	regex = re.compile('['+chars+']')
	return regex.sub('', sentence)
	
# Open file for reading.
test_cases = open(sys.argv[1], 'r')

for line in test_cases:
	args = line.split(', ')
	print(removeCharacters(args[0], args[1]))