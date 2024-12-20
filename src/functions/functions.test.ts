import {it, expect, describe} from "vitest";
import { countVowels, factorial, findCommonObjects, findLongestWord, isSubset } from "./functions";

describe("factorial",()=>{
    it("should return 120",()=>{
        expect(factorial(5)).toBe(120);
    });

    it("should return 6",()=>{
        expect(factorial(3)).toBe(6);
    });

    it("should return 120",()=>{
        expect(factorial(5)).toBe(120);
    })

    it("test with zero",()=>{
        expect(factorial(0)).toBe(1);
    });

    it("test with negative numbers",()=>{
        expect(()=>factorial(-3)).toThrowError("Factorial is not defined for negative numbers");
    });
});

describe("findLongestWord",()=>{
    it("normal sentence",()=>{
        expect(findLongestWord("The quick brown fox jumpss over the lazy dog")).toBe("jumpss");
    });

    it("single word sentence",()=>{
        expect(findLongestWord("Hello")).toBe("Hello");
    });
    
    it("empty sentence",()=>{
        expect(findLongestWord("")).toBe("");
    });

    it("sentence with extra whitespaces",()=>{
        expect(findLongestWord(" A quick test ")).toBe("quick");
    });
});

describe("countVowels",()=>{
    it("normal text",()=>{
        expect(countVowels("Hello World")).toBe(3);
    });

    it("just mássalhangzók",()=>{
        expect(countVowels("bcdfg")).toBe(0);
    });

    it("upper and lower case",()=>{
        expect(countVowels("AeIoU")).toBe(5);
    });

    it("empty string",()=>{
        expect(countVowels("")).toBe(0);
    });
});

describe("isSubset",()=>{
    it("should return true",()=>{
        expect(isSubset({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toBe(true);
    });

    it("should return false",()=>{
        expect(isSubset({ a: 1, d: 4 }, { a: 1, b: 2, c: 3 })).toBe(false);
    });
});

describe("findCommonObjects",()=>{
    it("there are common objects",()=>{
        expect(findCommonObjects([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }])).toEqual([{id: 2, name: "Bob"}]);
    });

    it("there are not common objects",()=>{
        expect(findCommonObjects([{ id: 1, name: 'Alice' }], [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }])).toEqual([]);
    });

    it("empty arrays",()=>{
        expect(findCommonObjects([], [])).toEqual([]);
    });

    it("one array is empty",()=>{
        expect(findCommonObjects([{ id: 1, name: 'Alice' }], [])).toEqual([]);
    });
});