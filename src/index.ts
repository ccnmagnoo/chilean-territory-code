import cut_data from './assets/cut_data.json';
import region_data from './assets/region_data.json';
import province_data from './assets/province_data.json';
import { Cut, Province, Region } from './models/territory';

const data = {
  region: region_data as Region[],
  province: province_data as Province[],
  city: cut_data as Cut[],
};

type ScopeKey = keyof typeof data;

export default function getTerritoryInfo(keyword: string, scope: ScopeKey) {}
