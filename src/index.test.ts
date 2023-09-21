import { expect, test } from '@jest/globals';
import { getTerritory } from '.';

test('testing Valparaíso', () => {
  expect(getTerritory('valpaiso')?.name).toBe('Valparaíso');
});
test('testing Quillota province', () => {
  expect(getTerritory('quuillot', 'province')?.name).toBe('Quillota');
});
test('testing Atacama region', () => {
  expect(getTerritory('atacm', 'region')?.name).toBe('Atacama');
});

test('testing Calera region', () => {
  expect(getTerritory('la falera', 'city')?.name).toBe('Calera');
});
