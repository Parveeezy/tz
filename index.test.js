import {findLostNum} from "./index";

test('find missing number', () => {
    expect(findLostNum([5, 0, 1, 3, 2])).toBe(4);
    expect(findLostNum([5, 1, 3, 2, 4])).toBe(0);
    expect(findLostNum([5, 1, 4, 2, 0])).toBe(3);
    expect(findLostNum([7, 9, 10, 11, 12])).toBe(8);
})