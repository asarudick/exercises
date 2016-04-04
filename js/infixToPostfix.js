
// key = the oeprator character, value is its precedence.
const operators = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3
};

export default function infixToPostfix (str) {
    const expression = str.replace(/\s/g, '');
    let postfix = '';
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const character = expression[i];

        if (character === '(')
        {
            stack.push(character);
            continue;
        }

        if (character === ')')
        {
            const [ operator, parens ] = [ stack.pop(), stack.pop() ];
            postfix += operator;
            continue;
        }

        if (operators[character] !== undefined && operators[stack[stack.length - 1]] !== undefined)
        {
            const precedence = operators[character];

            while (operators[stack[stack.length - 1]] !== undefined && precedence <= operators[stack[stack.length - 1]])
            {
                const topPrecedence = operators[stack[stack.length - 1]];

                if (precedence === topPrecedence)
                {
                    postfix += stack.pop();
                }
                else if (precedence < topPrecedence)
                {
                    postfix += stack.pop();
                }
            }

            stack.push(character);
            continue;
        }

        if (operators[character] !== undefined)
        {
            stack.push(character);
            continue;
        }

        postfix += character;
    }

    while (stack.length)
    {
        postfix += stack.pop();
    }

    return postfix;
}
