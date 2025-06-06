"use strict";
/**
 * @file Defines the KeyValuePair class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValuePair = void 0;
class KeyValuePair {
    /**
     * The key component of the key value pair.
     */
    key;
    /**
     * The value component of the key value pair
     */
    value;
    /**
     * Initializes a new instance of the KeyValuePair<TKey, TValue> class.
     *
     * @param key The key to initialize with.
     * @param value The value to initialize with.
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
exports.KeyValuePair = KeyValuePair;
//# sourceMappingURL=keyvaluepair.js.map