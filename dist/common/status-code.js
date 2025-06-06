/**
 * @file Defines the StatusCode enum that is used to
 *       give system status codes.
 * @since 09/01/2018
 * @copyright Jacob Heater <jacobheater@gmail.com>
 */
export var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 0] = "OK";
    StatusCode[StatusCode["Error"] = 1] = "Error";
    StatusCode[StatusCode["ArgumentInvalid"] = 2] = "ArgumentInvalid";
    StatusCode[StatusCode["ArgvInvalid"] = 3] = "ArgvInvalid";
})(StatusCode || (StatusCode = {}));
//# sourceMappingURL=status-code.js.map