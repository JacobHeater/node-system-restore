/**
 * @file Defines the KeyValuePair class.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
export declare class KeyValuePair<TKey, TValue> {
    /**
     * The key component of the key value pair.
     */
    readonly key: TKey;
    /**
     * The value component of the key value pair
     */
    readonly value: TValue;
    /**
     * Initializes a new instance of the KeyValuePair<TKey, TValue> class.
     *
     * @param key The key to initialize with.
     * @param value The value to initialize with.
     */
    constructor(key: TKey, value: TValue);
}
