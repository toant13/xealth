import assert from 'assert';
import { describe, it } from 'mocha';
import getAlphabetOrderingFrom from '../src/alphabet-order';


describe('[a,b,c], happy path, only one char to compare for each word', () => {
  it('should return [a,b,c]', () => {
    const wordList = ['a', 'b', 'c'];
    const actual = getAlphabetOrderingFrom(wordList);
    const expected = ['a', 'b', 'c'];

    assert.deepStrictEqual(actual, expected);
  });
});

describe('[aa,ab,ac], unique chars after first char matches', () => {
  it('should return [a,b,c]', () => {
    const wordList = ['aa', 'ab', 'ac'];
    const actual = getAlphabetOrderingFrom(wordList);
    const expected = ['a', 'b', 'c'];

    assert.deepStrictEqual(actual, expected);
  });
});

describe('[abc,abc,bbb,ccc], back to back exact words, unique chars after first char matches', () => {
  it('should return [a,b,c]', () => {
    const wordList = ['abc', 'abc', 'bbb', 'ccc'];
    const actual = getAlphabetOrderingFrom(wordList);
    const expected = ['a', 'b', 'c'];

    assert.deepStrictEqual(actual, expected);
  });
});

describe('[acc,cadb,cadc,dca,dcb], ordering is dictated by first char of words and last non-matching char', () => {
  it('should return [a,b,c,d] because a is before c (1st and 2nd word), but b is before c (2nd and 3rd word)', () => {
    const wordList = ['accc', 'cadddb', 'cadddc', 'dcaa', 'dcab'];
    const actual = getAlphabetOrderingFrom(wordList);
    const expected = ['a', 'b', 'c', 'd'];

    assert.deepStrictEqual(actual, expected);
  });
});


describe('[bca, aaa, acb], b before c (from 1st and 2nd word), a before C (from 2nd and 3rd word)', () => {
  it('should return [b, a, c]', () => {
    const wordList = ['bca', 'aaa', 'acb'];
    const actual = getAlphabetOrderingFrom(wordList);
    const expected = ['b', 'a', 'c'];

    assert.deepStrictEqual(actual, expected);
  });
});
