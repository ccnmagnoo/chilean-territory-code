import levenshtein from 'js-levenshtein';

export function scopeExtract<S, K extends keyof S>(item: S, scope: K, keyword: string) {
  return {
    leven: levenshtein(item[scope] as string, keyword),
    name: item[scope],
    type: scope,
  };
}
