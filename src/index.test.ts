import { expect, test } from '@jest/globals';
import getTerritoryInfo from '.';

test('getting city info of valpariso as Valparaíso', () => {
  expect(getTerritoryInfo('valparaiso')?.name).toBe('Valparaíso');
});
