import canIterate from '../canIterate';

describe('canIterate', () => {
  test.each([
    [new Map(), true],
    [new Set(), true],
    [null, false],
    [10, false],
    ['Netology', true],
  ])('should return true if item is iterable, false if not', (item, expected) => {
    expect(canIterate(item)).toBe(expected);
  });
});
