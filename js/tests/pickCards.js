import { pickDeck, collect } from '../pickCards';
import assert from 'assert';

describe('pickDeck', () => {
    it('should return 5 cards', () => {
        const count = 5;
        const cards = pickDeck(count);
        assert.equal(cards.length, count);
    });
});
describe('collect', () => {
    it('should collect all cards', () => {
        const collection = collect();
        assert.equal(collection.common.collected, true);
        assert.equal(collection.rare.collected, true);
        assert.equal(collection.epic.collected, true);
        assert.equal(collection.legendary.collected, true);
    });
});
