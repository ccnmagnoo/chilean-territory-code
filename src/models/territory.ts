export type Region = {
  region: string;
  region_code: string;
  region_acronym: string;
};

export type Province = {
  province: string;
  province_code: string;
};

export type City = {
  city: string;
  city_code: string;
};

export interface Cut extends Region, Province, City {}
