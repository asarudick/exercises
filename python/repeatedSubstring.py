import sys
import re

def longestRepeatedSubstring( haystack ):
	if len(haystack) <= 1:
		return ""

	matches = []
	count = len(haystack)

	while len(matches) == 0 and count > 0:
		matches = [ item for item in re.findall(r"(.{" + str(count) + r"}).*\1", haystack) if item.strip() != ""]
		count -= 1


	return matches[0] if len(matches) > 0 else ""



lines = open(sys.argv[1], 'r')
output = []

for line in lines:

	line = line.strip()


	if line == "":
		continue

	longest = longestRepeatedSubstring(line)

	output.append(longest if len(longest) > 0 else 'NONE')

for i in output:
	print(i)

lines.close()
