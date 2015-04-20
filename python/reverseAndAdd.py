import sys


def reverse(num):
	return int(str(num)[::-1])

def isPalindrome(num):
	return num == reverse(num)

def getNumOfIterations(startNum):

	iterations = 0
	maxIterations = 100

	currentResult = startNum
	
	while not isPalindrome(currentResult) and iterations < maxIterations:
		currentResult += reverse(currentResult)
		iterations += 1

	return str(iterations) + " " + str(currentResult)




lines = open(sys.argv[1], 'r')

for line in lines:
	print(getNumOfIterations(*[int(x) for x in line.strip().split()]))
