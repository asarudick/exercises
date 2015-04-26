import sys
from itertools import permutations, combinations_with_replacement, combinations, product

lines = open(sys.argv[1], 'r')

for line in lines:

	args = line.strip().split(',')

	combs = sorted(list(set(product(args[1], repeat=int(args[0])))))

	print(",".join( "".join(comb) for comb in combs ))
