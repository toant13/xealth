import assert from 'assert';
import { describe, it } from 'mocha';
import getAlphabetOrderingFrom from '../src/alphabet-order';


describe('[\'bca\', \'aaa\', \'acb\']', () => {
  it('should return [\'b\', \'a\', \'c\']', () => {
    const wordList = ['bca', 'aaa', 'acb'];
    const actual = getAlphabetOrderingFrom(wordList);
    const expected = ['b', 'a', 'c'];

    assert.deepStrictEqual(actual, expected);
  });
});
