import cut_data from './assets/cut_data.json';
import region_data from './assets/region_data.json';
import province_data from './assets/province_data.json';
import { Cut, Province, Region } from './models/territory';
import { scopeExtract } from './utils/scopeExtract';
import fetchInferred from './utils/fetchInferred';

const data = {
  region: region_data as Region[],
  province: province_data as Province[],
  city: cut_data as Cut[],
};

type ScopeKey = keyof typeof data;

function getTerritory(keyword: string, scope: ScopeKey = 'city') {
  const scope_data = fetchInferred(data, scope);

  //get object with leven
  const leven = scope_data.map((item, index) => {
    switch (scope) {
      case 'city':
        return { ...scopeExtract(item as Cut, scope, keyword), index: index };
      case 'province':
        return { ...scopeExtract(item as Province, scope, keyword), index: index };
      case 'region':
        return { ...scopeExtract(item as Region, scope, keyword), index: index };
      default:
        return undefined;
    }
  });

  //get the highest leven value
  const best_result = leven.sort((a, b) => (a?.leven ?? 1) - (b?.leven ?? 0))[0];

  return best_result;
}

function getCut(keyword: string, scope: ScopeKey = 'city'): Partial<Cut> | undefined {
  // normalize data  type
  const scope_data = data[scope] as Partial<Cut>[];
  const index = getTerritory(keyword, scope)?.index;

  return index ? scope_data[index] : undefined;
}

function getCitiesList(
  keyword?: string,
  scope: Exclude<ScopeKey, 'city'> = 'region'
): Cut[] | undefined {
  const scope_data = data.city as Cut[];
  //return all cities listed
  if (!keyword) return scope_data;

  //if scope is regional
  const ref = getCut(keyword, scope);
  console.log('location ref: ', ref); //return Cut referencial;
  if (!ref) return undefined;

  //get referential homologized word
  const code = ref[scope] as keyof Cut;

  //filter
  return scope_data.filter((it) => {
    return code === it[scope];
  });
}

export { getTerritory, getCut, getCitiesList };

module.exports = { getTerritory, getCut, getCitiesList };
