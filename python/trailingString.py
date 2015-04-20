import sys

def endsWith(haystack, needle):

	if len(needle) > len(haystack):
		return False
		
	return haystack[len(haystack)-len(needle):len(haystack)] == needle

lines = open(sys.argv[1], 'r')

for line in lines:
	args = line.strip().split(",")
	print(1 if endsWith(*line.strip().split(",")) else 0)
