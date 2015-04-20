import sys

def pickCycle(length, step):
    sequence = []

    # Holds the living status of the people. True = alive.
    people = []

    # step is not zero-based, but the circle is
    position = -1

    executedCount = 0

    # copy the list
    for element in range(length):
        sequence.append(element)
        people.append(True)

    # yield when there's something in there
    while executedCount < length:

        count = 0

        while count < step:
            position = (position + 1) % length
            if people[position]:
                count += 1

        yield sequence[position]

        # "They dead now, ya'll"
        people[position] = False
        executedCount += 1


test_cases = open(sys.argv[1], 'r')

for line in test_cases:
    line = line.strip()

    gen = pickCycle(*[int(x) for x in line.split(",")])

    print(*[str(x) for x in gen])

test_cases.close()
