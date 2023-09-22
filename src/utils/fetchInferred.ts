export default function fetchInferred<T, K extends keyof T>(it: T, key: K) {
  return it[key];
}
