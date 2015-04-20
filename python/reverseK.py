import sys

def reverse(list):
	return list[::-1]

def reverseKGroups(list,k):
	remainder = len(list) % k

	for i in range(0, len(list) - remainder, k):
		list[i:i+k] = reverse(list[i:i+k])

	return list

lines = open(sys.argv[1], 'r')

for line in lines:
	args = line.strip().split(";")
	list = [int(x) for x in args[0].split(",")]
	k = int(args[1])
	print(",".join([str(x) for x in reverseKGroups(list, k)]))
