import sys
import re

pattern = re.compile("^[_A-Za-z0-9-\.\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$|^\"[_A-Za-z0-9-\.\+@]+(\.[_A-Za-z0-9-]+)*\"@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$")


test_cases = open(sys.argv[1], 'r')

for email in test_cases:
	if email == '':
		continue

	if re.match(pattern, email):
		print("true")
	else:
		print("false")
