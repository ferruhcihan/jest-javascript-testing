const subtract = require('./subtract')

test('properly add two numbers', () => {
    expect(
        subtract(1, 2)
    ).toBe(-1)
})
