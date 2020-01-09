import { defaultToString } from './utils';
import { ValuePair } from './models/value-pair.js';

export default class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
}
