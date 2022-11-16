const woof = require('./woof');

test('should return number of woofs', () => {
    const result = woof('oh herro');

    // toBe more like a strict equality operator
    expect(result).toBe('8 woof!');
    // toEqual meant for objects and arrays
    expect({ a: 'one', b: 'two' }).toEqual({ a: 'one', b: 'two' });
    // toMatch will take a string, but usually takes a regular expression. //i --> case insensitivity, \d --> looks for any digit
    expect(result).toMatch(/\d woof/i);
    // toContain checks arrays
    expect(["a", "b", "c"]).toContain('b');
});

test('should return null when not given a string', () => {
    expect(() => woof()).toThrow('Must be a string');
    // const result = woof();

    // expect(result).toBeNull()
})