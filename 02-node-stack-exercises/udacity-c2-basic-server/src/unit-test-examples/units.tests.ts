import { add, divide, concat } from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    const result = add(2,2);
    expect(result).to.equal(4);
  });

  it('should add -2 and two', () => {
    const result = add(-2,2);
    expect(result).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    const result = divide(6,3);
    expect(result).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    const result = divide(5,2);
    expect(result).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    expect(()=>{ divide(5,0) }).to.throw('div by 0')
  });

});

// try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)

describe('concat', () => {

  it('arg1 and null should return arg1 ', () => {
    const result = concat('arg1' ,null);
    expect(result).to.equal('arg1');
  });

  it('arg1 and undefined should return arg1 ', () => {
    const result = concat('arg1' , undefined);
    expect(result).to.equal('arg1');
  });

  it('null and arg1 should return arg1 ', () => {
    const result = concat(null, 'arg1' );
    expect(result).to.equal('arg1');
  });

  it('undefined and arg1 should return arg1 ', () => {
    const result = concat(undefined, 'arg1' );
    expect(result).to.equal('arg1');
  });

  it('arg1 and arg2 should return arg1arg2 ', () => {
    const result = concat('arg1', 'arg2' );
    expect(result).to.equal('arg1arg2');
  });

  it('should throw an error if null and null', () => {
    expect(()=>{ concat(null, null ) }).to.throw('Both object can not be null or undefined')
  });

  it('should throw an error if null and undefined', () => {
    expect(()=>{ concat(null, undefined ) }).to.throw('Both object can not be null or undefined')
  });

  it('should throw an error if undefined and null', () => {
    expect(()=>{ concat(undefined, null ) }).to.throw('Both object can not be null or undefined')
  });

  it('should throw an error if undefined and undefined', () => {
    expect(()=>{ concat(undefined, undefined ) }).to.throw('Both object can not be null or undefined')
  });  
});