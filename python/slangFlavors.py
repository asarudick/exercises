import sys
import re
from itertools import *

slangFlavors = [
	', yeah!',
	', this is crazy, I tell ya.',
	', can U believe this?',
	', eh?',
	', aw yea.',
	', yo.',
	'? No way!',
	'. Awesome!'
]

slangIterator = cycle(slangFlavors)


# Open file for reading.
test_cases = open(sys.argv[1], 'r')

replace = False

for line in test_cases:
	
	result = line.strip()
	offset = 0
	
	for match in re.finditer(r'[\.\?\!]', line):
		
		
		if not replace:
			replace = not replace
			continue
			
		replace = not replace
		
		slang = next(slangIterator)
		result = result[:match.start()+offset] + slang + result[match.end()+offset:]
		offset += len(slang) - 1
		
	print(result)