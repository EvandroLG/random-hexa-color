import randomHexaColor from './index';

function areUniques(arr: string[]) {
  const set = new Set(arr);
  return set.size === arr.length;
}

test('returns random hexadecimal colors', () => {
  const generatedColors: string[] = [];

  for (let i = 0; i < 5; i++) {
    const color = randomHexaColor();
    generatedColors.push(color);
    expect(color).toHaveLength(7);
  }

  expect(areUniques(generatedColors)).toBeTruthy();
});
