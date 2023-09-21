import { expect, test } from '@jest/globals';
import getTerritoryInfo from '.';

test('testing Valparaíso', () => {
  expect(getTerritoryInfo('valpaiso')?.name).toBe('Valparaíso');
});
test('testing Quillota province', () => {
  expect(getTerritoryInfo('quuillot', 'province')?.name).toBe('Quillota');
});
test('testing Atacama region', () => {
  expect(getTerritoryInfo('atacm', 'region')?.name).toBe('Atacama');
});
