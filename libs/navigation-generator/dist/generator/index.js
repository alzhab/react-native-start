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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = __importDefault(require("./route"));
const module_1 = __importDefault(require("./indexes/module"));
const utils_1 = require("../utils");
function generateNavigation(data, genPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const navigations = [];
        for (const route of data) {
            yield route_1.default(route, genPath);
            utils_1.addNavigations(navigations, route);
        }
        yield module_1.default(genPath, data);
        console.log('=======NAVIVGATION ENUM=======');
        navigations.forEach((name) => {
            console.log(`${name} = '${name}',`);
        });
        console.log('=======NAVIVGATION ENUM=======');
        return;
    });
}
exports.default = generateNavigation;
