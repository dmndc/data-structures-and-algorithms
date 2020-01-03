import { defaultToString } from './utils';
import { ValuePair } from './models/value-pair.js';

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key) {
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)];
    }
    return undefined;
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  values() {
    return this.keyValues().map(ValuePair => ValuePair.value);
  }
}
