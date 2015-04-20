import sys

def isPrime(num):
    return all(num % i for i in range(2, num))

def getPrimesBetweenNM(N, M):
    return [x for x in filter(isPrime, range(N,M+1))]


test_cases = open(sys.argv[1], 'r')

for line in test_cases:


    line = line.strip()
    print(len(getPrimesBetweenNM(*[int(x) for x in line.split(",")])))

test_cases.close()
