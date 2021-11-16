const { sum, nativeNull } = require("./intro");


// Объединение кейсов
describe('Sum function', () => {
    // 1 - Название теста, 2 - описываем тест
    test('should return sum of two values', () => {
        //! Если хотябы 1 то expect провалится, то тест не пройдёт
        // Ожидаем что функция sum вернёт 4
        expect(sum(1, 3)).toBe(4)

        expect(sum(1, 3)).toEqual(4)
    });

    test('should return value correctly comparing to other values', () => {
        // Меньше чем sum
        expect(sum(2, 3)).toBeGreaterThan(1)
        // Меньше или Равно sum
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
        // Больше чем sum
        expect(sum(2, 3)).toBeLessThan(6)
        // Больше или равно sum
        expect(sum(2, 3)).toBeLessThanOrEqual(5)
    })

    test('should sum 2 float values correctly', () => {
        // Используется toBeCloseTo для сравнения чисел с плавающей запятой для приблизительного равенства.
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

test('Native null should return false value null', () => {
    expect(nativeNull()).toBe(null)
})