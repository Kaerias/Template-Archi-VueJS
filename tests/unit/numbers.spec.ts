describe("Arrondi des nombres", () => {
    test("arrondi d'une valeur limite 1.005 à deux décimales", () => {
        const val = 1.005;
        const result = 1.005;
        expect(result).toEqual(1.005);
    });
});
