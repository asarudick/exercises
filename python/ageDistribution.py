
import sys

ages = [
	{ 'range': [0,2], 'message': 'Still in Mama\'s arms'},
	{ 'range': [3,4], 'message': 'Preschool Maniac'},
	{ 'range': [5,11], 'message': 'Elementary school'},
	{ 'range': [12,14], 'message': 'Middle school'},
	{ 'range': [15,18], 'message': 'High school'},
	{ 'range': [19,22], 'message': 'College'},
	{ 'range': [23,65], 'message': 'Working for the man'},
	{ 'range': [66,100], 'message': 'The Golden Years'},
];

# Returns message corresponding to the age range.
def getAgeMessage( age ):
	result = ''
	
	for item in ages:
		if( age >= item['range'][0] and age <= item['range'][1] ):
			return item['message']
	
	return 'This program is for humans'



# Open file for reading.
test_cases = open(sys.argv[1], 'r')


# Main work.
for test in test_cases:
	
	# ignore test if it is an empty line
	if test == '':
		continue
	
	print (getAgeMessage( int(test) ))
	
test_cases.close()