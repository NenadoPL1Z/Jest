const Lodash = require('./sync')


describe('Lodash compact', () => {

    // Запускается перед каждым тестом
    beforeEach(() => {

    })

    // Запускается перед первым тестом
    beforeAll(() => {

    })

    const _ = new Lodash()

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('should remove false values from array', () => {
        const arr = [false, 1, 0, 23, 423, '', undefined, true, null, '123123', '32']
        const result = [1, 23, 423, true, '123123', '32']
        // Тоже самое, что и toBe. Используется для сложных сравнений (массив, объект)
        expect(_.compact(arr)).toEqual(result)
    })

    test('should NOT contain falsy values', () => {
        const array = [false, 42, 0, '', true, null, 'hello']
        // toContain - проверяет содержание строки/массива
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
    })
})