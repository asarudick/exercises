
import sys
import math

def toSexigesimal( number ):
	number = float(number)
	
	degrees = math.floor( number );

	number -= degrees;

	minutes = math.floor( number * 60 );

	number = ( number * 60 ) - minutes;

	seconds = math.floor( number * 60 );

	return str(degrees) + '.' + str(minutes).zfill(2) + '\'' + str(seconds).zfill(2) + '"';




# Open file for reading.
test_cases = open(sys.argv[1], 'r')

# Main work.
for test in test_cases:
	print (toSexigesimal(test))


test_cases.close()