"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var getWeather_1 = require("./getWeather");
var clc = require("cli-color");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var askQuestion = function (question) {
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            resolve(answer);
        });
    });
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var name, quit, place, data, temp, weatherCondition, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, askQuestion("What is your name? ")];
                case 1:
                    name = _a.sent();
                    console.log("Hello ".concat(name));
                    quit = false;
                    _a.label = 2;
                case 2:
                    if (!!quit) return [3 /*break*/, 10];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 8, , 9]);
                    return [4 /*yield*/, askQuestion("Enter the name of a city to know its weather (or type 'quit'/ ctrl+C to exit): ")];
                case 4:
                    place = _a.sent();
                    if (!(place.toLowerCase() === "quit")) return [3 /*break*/, 5];
                    quit = true;
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, (0, getWeather_1.getWeather)(place)];
                case 6:
                    data = _a.sent();
                    temp = "".concat((data.main.temp - 273.15).toFixed(2), " \u00B0C");
                    weatherCondition = data.weather[0].main;
                    console.log("".concat(clc.blue("Current Temperature => "), " ").concat(temp));
                    console.log("".concat(clc.green("Weather Condition => "), " ").concat(weatherCondition));
                    console.log(data);
                    _a.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    console.error("Error: Invalid Data", error_1.message);
                    return [3 /*break*/, 9];
                case 9: return [3 /*break*/, 2];
                case 10:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main();
