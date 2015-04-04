import sys

test_cases = open(sys.argv[1],'r')

for line in test_cases:

	x,y,n = line.split()

	x,y,n = int(x), int(y), int(n)

	for i in range(1,n+1):
		if i % x == 0 and i % y == 0:
			print("FB", end=' ')
		elif i % x == 0:
			print("F", end=' ')
		elif i % y == 0:
			print("B", end=' ')
		else:
			print(i, end=' ')

	print('')
