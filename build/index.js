"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./model/data");
const dataEndpoint_1 = require("./handler/dataEndpoint");
const app = (0, express_1.default)();
const port = 3000;
const d = new data_1.Data();
console.log(d.indexData());
app.use(body_parser_1.default.json());
(0, dataEndpoint_1.dataRoute)(app);
app.listen(port, () => {
    console.log(`listen to http://localhost:${port}`);
});
