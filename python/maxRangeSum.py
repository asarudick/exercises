import sys
import math

# Open file for reading.
test_cases = open(sys.argv[1], 'r')

	
# Main work.
for line in test_cases:
	
	if( line == '' ):
		continue
		
	line = line.strip()
	
	args = line.split(';')
	
	days = int(args[0])
	
	values = [int(x) for x in args[1].split()]
	
	max_so_far = 0
	
	for i in range(0,len(values)-days+1):
		days_sum = sum(values[i:i+days])
		if(days_sum > max_so_far):
			max_so_far = days_sum
		
	print(max_so_far)