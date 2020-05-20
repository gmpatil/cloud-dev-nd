// Super Simple Unit Functions

import { isNullOrUndefined } from "util";

export const add = (a: number, b: number) => {
    return a + b;
    }

export const divide = (a: number, b: number) => {
    if(b === 0) { throw new Error('div by 0') }

    return a / b;
    }

// try creating a method "concat" to concatenate two strings
// it should take two string paramaters.
// it should return one string combining the two strings.
// it should throw an error if either of the strings are empty.
// ensure your function is exported.
export const concat = (a: string, b: string) => {
    if(isNullOrUndefined(a) && isNullOrUndefined(b)) { 
        throw new Error('Both object can not be null or undefined');
    }

    if (isNullOrUndefined(a)) {
        return b;
    }

    if (isNullOrUndefined(b)) {
        return a;
    }

    return a.concat(b);

    }