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
test('return all cities at the region related with city Valparaíso', () => {
  expect(getCitiesList('valparaios')?.length).toBe(38);
});

test('return all cities related to same region of Viña del mar', () => {
  expect(getCitiesList('via de mqar', 'city', 'region')?.length).toBe(38);
});

test('return count all cities with the same pronvice of Calama city', () => {
  expect(getCitiesList('calmama', 'city', 'province')?.length).toBe(3);
});
