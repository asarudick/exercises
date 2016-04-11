

// # of unique cards for rarity (% chance to obtain)
// 94 Common cards (74%) - 2 of every
// 81 Rare cards (21%) - 2 of every
// 37 Epic card (4%) - 2 of every
// 33 Legendary cards (1%) - 1 of every

// A pack contains 5 random cards.

// Part 1: Simulate opening a pack and printing out a sensible result

// when it's common
// generate a number between 1-94 and set that as its name


import _ from 'lodash';

const cardTypes = {
    common: {
        distribution: [ 0, 74 ],
        count: 94
    },
    rare: {
        distribution: [ 74, 95 ],
        count: 81,
    },
    epic: {
        distribution: [ 95, 99 ],
        count: 37
    },
    legendary: {
        distribution: [ 99, 100 ],
        count: 33
    }
};

export function pickDeck(count) {
    const cards = [];

    for (let i = 0; i < count; i++) {

        const result = Math.floor(Math.random() * 100);

        for (let j = 0, keys = Object.keys(cardTypes); j < keys.length; j++) {

            const typeName = keys[j];
            const cardType = cardTypes[typeName];

            if (result >= cardType.distribution[0] && result < cardType.distribution[1]) {
                const cardNumber = Math.floor(Math.random() * cardType.count) + 1;
                cards.push({
                    type: typeName,
                    number: cardNumber
                });
                break;
            }
        }
    }

    return cards;
}

const thresholds = {
    common: 2,
    rare: 2,
    epic: 2,
    legendary: 1
};

/**
 * Collects N of each card number of each card type where N is that card type's threshold(minimum to consider the card number 'collected').
 * @return {Object} The collection. Contains the number of each card number collected.
 */
export function collect() {
    const deckSize = 5;
    let collected = false;

    const collection = {
        common: { numbers: _.times(cardTypes.common.count, _.constant(0)), collected: false },
        rare: { numbers: _.times(cardTypes.rare.count, _.constant(0)), collected: false },
        epic: { numbers: _.times(cardTypes.epic.count, _.constant(0)), collected: false },
        legendary: { numbers: _.times(cardTypes.legendary.count, _.constant(0)), collected: false }
    };

    while (!collected) {
        const cards = pickDeck(deckSize);

        // Loop through all the cards of the deck we just picked.
        for (let i = 0, length = cards.length; i < length; i++)
        {
            const card = cards[i];

            const collectionOfType = collection[card.type];

            // Do nothing further if the type of card has already been collected.
            if (collectionOfType.collected)
            {
                continue;
            }

            // Increment the slot in the array that corresponds with the card number, and determine if we've collected all of that type.
            const numbers = collection[card.type].numbers;

            // Cards are one-indexed, arrays are zero-indexed.
            numbers[card.number - 1]++;

            if (numbers.every( (n) => n >= thresholds[card.type] ))
            {
                collectionOfType.collected = true;
            }

            // Determine whether we have collected all the cards. If so, we need not process additional cards from deck.
            collected = collection.common.collected && collection.rare.collected && collection.epic.collected && collection.legendary.collected;

            if (collected)
            {
                break;
            }
        }
    }

    return collection;
}
