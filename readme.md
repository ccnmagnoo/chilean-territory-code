# Package Name

A Node.js package for checking territorial names and codes using the Levenshtein distance
algorithm. [github source code](https://github.com/ccnmagnoo/chilean-territory-code)

> only valid for Chilean territory, and always returns the closest value, without
> exception

## Installation

Use npm to install the package:

```shell
npm install chilean-territory-code

```

## API

Input params

- criteria: keyword referencial as 'Valpo'
- scope : 'city'|'province'|'region'

```typescript
import { getTerritory, getDetails, getCitiesList } from 'chilean-territory-code';
const basic = getTerritory('criteria', scope);
/**
 * returns{
 *  name:string,
 *  leven:number //word proximity
 *  type:string, //territorial scope city | province | region
 *  index: number //data source location
 * }
 */

const withCodes = getCut('criteria', scope);
/**
 * by CUT from spanish UNIQUE TERRITORIAL CODE
 * returns{
 *  city?:string,
 *  city_code?:string
 *  province?:string,
 *  province_code?:string
 *  region:string,
 *  region_code:string,
 *  region_acronym:string
 * }
 */

const listOfCities = getCitiesList('criteria', scope);
/**
 * returns Array<{
 *  city?:string,
 *  city_code?:string
 *  province?:string,
 *  province_code?:string
 *  region:string,
 *  region_code:string,
 *  * region_acronym:string
 * }>
 */
```
