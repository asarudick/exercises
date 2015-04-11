import sys
import re

test_cases = open(sys.argv[1],'r')

# Characters that represent opening and enclosing
opening 		= r'\{|\[|\('
closing 		= r'\}|\]|\)'
counterparts 	= { '}' : '{',
					']' : '[',
					')' : '(' }

def IsValidExpression(expression):

	# Used to accrue the opening characters to test against later.
	stack = []

	# Test every character in expression
	for character in expression:

		# Push onto the stack if an opening character
		if (re.match(opening, character)):
			stack.append(character)
		# If closing character, ensure that the top of the stack is the reverse of it.
		# Also, we need to have already had an opening character.
		elif re.match(closing, character) and len(stack) > 0 and stack.pop() != counterparts[character]:
			return False

	# If stack is empty, then there are no incomplete pairings, and thus the expression is valid.
	return len(stack) == 0

for line in test_cases:
	expression = line.strip()

	print( 'True' if IsValidExpression(expression) else 'False' )
