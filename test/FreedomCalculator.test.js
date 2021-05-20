import calc from "../src/FreedomCalculator";

test('0 plates earns green', () => {
    const input = {
        Required_Plates: 0
    };
    expect(calc(input)).toBe("#DAF7A6");
})


test('1 plate earns yello', () => {
    const input = {
        Required_Plates: 1
    };
    expect(calc(input)).toBe("#FFC300");
})

test('1 plate earns red', () => {
    const input = {
        Required_Plates: 2
    };
    expect(calc(input)).toBe("#C70039");
})