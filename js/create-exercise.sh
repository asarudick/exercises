#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <exercise_name>"
  exit 1
fi

# Get the exercise name from the argument
EXERCISE_NAME=$1

# Create the TypeScript file with boilerplate code
cat <<EOL > "${EXERCISE_NAME}.ts"
export default function ${EXERCISE_NAME}(): void {
  // TODO: Implement the function
}
EOL

# Create the tests directory if it doesn't exist
mkdir -p tests

# Create the test file with boilerplate code
cat <<EOL > "tests/${EXERCISE_NAME}.test.ts"
import ${EXERCISE_NAME} from '../${EXERCISE_NAME}';

describe('${EXERCISE_NAME}', () => {
  it('should work correctly', () => {
    // TODO: Add test cases
    expect(${EXERCISE_NAME}()).toBeUndefined();
  });
});
EOL

echo "Created ${EXERCISE_NAME}.ts and tests/${EXERCISE_NAME}.test.ts with boilerplate code"