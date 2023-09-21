import cut_data from './assets/cut_data.json';
import region_data from './assets/region_data.json';
import province_data from './assets/province_data.json';
import { Cut, Province, Region } from './models/territory';
import levenshtein from 'js-levenshtein';

const data = {
  region: region_data as Region[],
  province: province_data as Province[],
  city: cut_data as Cut[],
};

type ScopeKey = keyof typeof data;
function getTerritoryInfo(keyword: string, scope: ScopeKey = 'city') {
  //fetch data
  const scope_data = data[scope];

  //get object with leven
  const leven = scope_data.map((item, index) => {
    if (scope === 'city') {
      const value = item as Cut;
      return {
        leven: levenshtein(value.city, keyword),
        name: value.city,
        type: scope as string,
        index: index,
      };
    }
    if (scope === 'province') {
      const value = item as Province;
      return {
        leven: levenshtein(value.province, keyword),
        name: value.province,
        type: scope as string,
        index: index,
      };
    }
    if (scope === 'region') {
      const value = item as Region;
      return {
        leven: levenshtein(value.region, keyword),
        name: value.region,
        type: scope as string,
        index: index,
      };
    }
  });

  //get the highest leven value
  const best_result = leven.sort((a, b) => (a?.leven ?? 1) - (b?.leven ?? 0))[0];

  return best_result;
}

export default getTerritoryInfo;
