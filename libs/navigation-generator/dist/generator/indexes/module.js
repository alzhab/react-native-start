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
const fs_1 = __importDefault(require("fs"));
const templates_1 = require("../../templates");
const handlebars_1 = __importDefault(require("handlebars"));
function generateModulesIndex(modulePath, routes) {
    return __awaiter(this, void 0, void 0, function* () {
        const indexPath = modulePath + '/index.tsx';
        const exist = yield fs_1.default.existsSync(indexPath);
        const navigations = routes.map((route) => ({
            name: route.name,
            exportName: !!route.routes
                ? route.name + 'Navigation' + '}'
                : route.name + '}',
        }));
        const source = templates_1.ModuleIndexTemplate;
        const template = handlebars_1.default.compile(source);
        const contents = template({ navigations }).trim();
        if (exist) {
            const data = yield fs_1.default.readFileSync(indexPath).toString();
            if (!data.includes(contents)) {
                yield fs_1.default.appendFile(indexPath, contents, (err) => {
                    if (err)
                        return console.log(err);
                });
            }
        }
        else {
            yield fs_1.default.writeFile(indexPath, contents, (err) => {
                if (err)
                    return console.log(err);
            });
        }
    });
}
exports.default = generateModulesIndex;
