describe('Selection Sort', () => {
  it('Fourth number should be twelve', () => {
    const arr = [5, 12, 8, 29, 1, 42]
    const value = 8;
    selectSort(arr, value);
    expect(arr[3]).toEqual(12);
  });
});
describe('Selection Sort', () => {
  it('Last number should be 42', () => {
    const arr = [5, 12, 8, 29, 1, 42]
    const value = 8;
    selectSort(arr, value);
    expect(arr[5]).toEqual(42);
  });
});
describe('Selection Sort', () => {
  it('First number should be 1', () => {
    const arr = [5, 12, 8, 29, 1, 42]
    const value = 8;
    selectSort(arr, value);
    expect(arr[0]).toEqual(1);
  });
});