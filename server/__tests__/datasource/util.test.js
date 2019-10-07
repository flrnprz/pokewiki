import {
  checkArraySize,
  getByLanguage,
  getDescription,
} from './../../src/datasource/util';
import * as speciesApiCall from '../dummyData/mocks/species_1.json';

const array = [1, 2, 3];
const emptyArray = [];

describe('datasource util lib', () => {
  it('checkArraySize should return 3', () => {
    expect(checkArraySize(array.length)).toBe(3);
  });

  it('checkArraySize should return 0', () => {
    expect(checkArraySize(emptyArray.length)).toBe(0);
  });

  it('checkArraySize should return 0 on undefined', () => {
    expect(checkArraySize(undefined)).toBe(0);
  });

  it('getByLanguage returns an array with one item matching language', () => {
    const list = [
      {
        name: 'uno',
        language: { name: 'es' },
      },
      {
        name: 'two',
        language: { name: 'en' },
      },
    ];

    expect(getByLanguage('es', list)).toMatchObject([
      {
        name: 'uno',
        language: { name: 'es' },
      },
    ]);
  });

  it('getByLanguage returns an empty array if no language found', () => {
    const list = [
      {
        name: 'uno',
        language: { name: 'es' },
      },
      {
        name: 'two',
        language: { name: 'en' },
      },
    ];
    expect(getByLanguage('fu', list)).toMatchObject([]);
  });

  it('getDescription should return a clean string', () => {
    const flavorTextEntries = getByLanguage(
      'en',
      speciesApiCall.flavor_text_entries,
    );
    const expectedString =
      'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.';
    expect(getDescription(flavorTextEntries)).toBe(expectedString);
  });
});