import sys

def longestCommonSubsequence(first, second):
	if len(first) == 0 or len(second) == 0:
		return ""

	# initialize
	memo = [[0 for j in range(len(second)+1)] for i in range(len(first)+1)]

	# build lengths table
	for i in range(0, len(first)):
		for j in range(0, len(second)):
			if first[i] == second[j]:
				memo[i+1][j+1] = memo[i][j] + 1
			else:
				memo[i+1][j+1] = max( memo[i+1][j], memo[i][j+1] )

	result, i, j = "", len(first), len(second)

	# backtrack and build result
	while i > 0 and j > 0:
		if memo[i][j] == memo[i-1][j]:
			i -= 1
		elif memo[i][j] == memo[i][j-1]:
			j -= 1
		else:
			assert first[i-1] == second[j-1]
			result = first[i-1] + result
			i -= 1
			j -= 1


	return result


lines = open(sys.argv[1], 'r')

for line in lines:

	line = line.strip()

	if line == "":
		continue

	print(longestCommonSubsequence(*line.split(';')).rstrip())
