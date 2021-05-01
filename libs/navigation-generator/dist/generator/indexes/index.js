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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const screen_1 = __importDefault(require("./screen"));
const navigation_1 = __importDefault(require("./navigation"));
const types_1 = require("../../types");
const utils_1 = require("../../utils");
function generateIndexFile(folderPath, routes, navigationType = types_1.NavigationsType.stack) {
    return __awaiter(this, void 0, void 0, function* () {
        const isScreen = routes === undefined;
        const type = isScreen ? types_1.IndexExtension.screen : types_1.IndexExtension.navigation;
        const name = utils_1.getFolderName(folderPath);
        const indexFilePath = path_1.default.join(folderPath, `index.${type}`);
        const exist = fs_1.default.existsSync(indexFilePath);
        if (!exist) {
            if (isScreen) {
                yield screen_1.default(indexFilePath, name);
            }
            else {
                yield navigation_1.default(indexFilePath, routes, name, navigationType);
            }
        }
    });
}
exports.default = generateIndexFile;
