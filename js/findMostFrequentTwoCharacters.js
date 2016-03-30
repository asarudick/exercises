// Find the two contiguous characters that occur the most frequently within given string.
// e.g. "abcdefab" should return "ab"
export default function findMostFrequentTwoCharacters (str) {

    // Keeps record of occurrences in form of "(character)(character)" => (integer). eg. "ab" => 3
    const frequency = {};

    // Stores the maximum frequency encountered thus far.
    let maxSoFar = 0;

    // Stores the key of hash that correlates with the highest count.
    let maxTwoCharacter = '';

    for (let i = 0, length = str.length - 1; i < length; i++) {

        const current = str.substr(i, 2);

        // Retrieve current count of the two characters we're examining.
        let currentFrequency = frequency[current];

        if (currentFrequency === undefined) {
            frequency[current] = 1;
        } else {
            frequency[current] = currentFrequency + 1;
        }

        // Reretrieve, since we just updated the hash.
        currentFrequency = frequency[current];

        // Increase max if the current frequency exceeds it.
        if (currentFrequency > maxSoFar) {
            maxSoFar = currentFrequency;
            maxTwoCharacter = current;
        }
    }

    return maxTwoCharacter;
}
