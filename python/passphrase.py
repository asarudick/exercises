startCharCode = ord('a')
endCharCode = ord('z')
alphabetLength = (endCharCode + 1) - startCharCode

def play_pass(s, n):
    result = []

    # Convert to string and normalize to lowercase.
    chars = [str(i) for i in s.lower()]

    # Need index for determining lowercase/uppercase.
    for i, char in enumerate(chars):

        # Digit case.
        if char.isdigit():
            result.append(str(9 - int(char)))

            # Alpha case.
        elif char.isalpha():

            # Calculate circular shift.
            shiftedCode = startCharCode + (((ord(char) + n) - startCharCode) % alphabetLength)

            # Convert back to character, uppercase/lowercase depending on index,
            # and append onto result.
            result.append(chr(shiftedCode).upper() if i % 2 == 0 else chr(shiftedCode).lower())

        # Non-alpha and non-digit case.
        else:
            result.append(char)

    return ''.join(list(reversed(result)))

assert(play_pass("I LOVE YOU!!!", 1) == "!!!vPz fWpM J")

assert(play_pass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2) == "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")
