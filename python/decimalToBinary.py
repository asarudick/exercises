
import sys

# Open file for reading.
test_cases = open(sys.argv[1], 'r')


# Main work.
for line in test_cases:
	
	# ignore test if it is an empty line
	if line == '':
		continue
		
	print ("{0:b}".format(int(line)))
	
	
test_cases.close()