import sys

primes = []
maximumNumSoFar = 2

def isPrime(num):
    return all(num % i for i in range(2, num))

def getPrimes(maximum):
    global maximumNumSoFar, primes

    if maximum <= maximumNumSoFar:
        return filter(lambda x: x < maximum, primes)

    for i in range(maximumNumSoFar, maximum):
        if isPrime(i):
            primes.append(i)

    maximumNumSoFar = max(maximumNumSoFar, maximum)

    return primes




test_cases = open(sys.argv[1], 'r')

for line in test_cases:


    line = line.strip()

    print(",".join(str(x) for x in getPrimes(int(line))))

test_cases.close()
