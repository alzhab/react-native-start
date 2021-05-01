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
exports.addNavigations = exports.generateFolder = exports.getFolderName = void 0;
const fs_1 = __importDefault(require("fs"));
const getFolderName = (p) => {
    const pathArr = p.split('/');
    return pathArr[pathArr.length - 1];
};
exports.getFolderName = getFolderName;
function generateFolder(folderPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const exist = fs_1.default.existsSync(folderPath);
        if (!exist) {
            yield fs_1.default.mkdir(folderPath, (err) => {
                if (err)
                    return console.log(err);
            });
        }
    });
}
exports.generateFolder = generateFolder;
function addNavigations(nav, route, parent = '') {
    const { name, routes } = route;
    nav.push(parent ? `${parent}_${name}` : name);
    if (routes) {
        routes.forEach((childRoute) => addNavigations(nav, childRoute, name));
    }
    return;
}
exports.addNavigations = addNavigations;
