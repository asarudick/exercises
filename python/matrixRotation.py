import sys
import math

# Open file for reading.
test_cases = open(sys.argv[1], 'r')

def rotateMatrix(matrix, size):
	result_matrix = [[0 for y in range(0,size)] for x in range(0,size)]
	
	for i in range(0,size):
		for j in range(0,size):
			result_matrix[i][j] = matrix[size-1-j][i]
		
	return result_matrix
	
	
# Main work.
for line in test_cases:
	
	if( line == '' ):
		continue
		
	line = line.strip()
	
	cells = line.split()
	
	matrix_size = math.sqrt(len(cells))
	
	matrix_size = int(matrix_size)
	
	matrix = [[cells[((x*matrix_size)+y)] for y in range(0,matrix_size)] for x in range(0,matrix_size)]
	
	result_matrix = rotateMatrix(matrix,matrix_size)

	[[print(result_matrix[x][y],end=" ") for y in range(0,matrix_size)] for x in range(0,matrix_size)]
	
	print('')
			