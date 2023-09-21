import { expect, test } from '@jest/globals';
import { getTerritory, getCitiesList } from '.';

test('testing Valparaíso', () => {
  expect(getTerritory('valpaiso')?.name).toBe('Valparaíso');
});
test('testing Quillota province', () => {
  expect(getTerritory('quuillot', 'province')?.name).toBe('Quillota');
});
test('testing Atacama region', () => {
  expect(getTerritory('atacm', 'region')?.name).toBe('Atacama');
});
test('testing city counts Valparaíso region', () => {
  expect(getCitiesList('valparaiso', 'region')?.length).toBe(38);
});
