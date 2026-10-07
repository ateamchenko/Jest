import {multiply, calculatePercentage, isEven, compareStrings, isPositive} from '../src/baseFunctions'
// toBe and toBeClosedTo tests
test('1.1 check if multiplication works', ()=>{
    expect(multiply(2, 28)).toBe(2 * 28);
})

test('1.2 check reverse multiplication', ()=>{
    expect(multiply(14, 88)/14).toBe(88);
})

test('2.1 check percentage calculation', ()=>{
    expect(calculatePercentage(125,500)).toBe(25);
})

test('2.2 check fractional value', ()=>{
    expect(calculatePercentage(28,557) / 100).toBeCloseTo(28/557,6);
})

// boolean tests
test('3.1 even check', ()=>{
    expect(isEven(50)).toBeTruthy();
})

test('3.2 not-even check', ()=>{
    expect(isEven(51)).toBeFalsy();
})

test('4.1 string vs string equality check', ()=>{
    expect(compareStrings('abc','abc')).toBeTruthy();
})

test('4.2 string vs string unequality check', ()=>{
    expect(compareStrings('abc','xyz')).toBeFalsy();
})

test('4.3 string vs modified string equality check', ()=>{
    expect(compareStrings('123','123'+ 58)).toBeFalsy();
})

test('5.1 check if positive number', ()=>{
    expect(isPositive(2)).toBeTruthy();
})

test('5.2 check if negative number', ()=>{
    expect(isPositive(-2)).toBeFalsy();
})
