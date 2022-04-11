"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const fs_1 = __importDefault(require("fs"));
class Data {
    constructor() {
        this.firstTime = () => {
            const dataFromJson = JSON.parse(fs_1.default.readFileSync(__dirname + "\\data\\topology.json", 'utf-8').toString());
            const dataId = dataFromJson.id;
            const dataChangeShape = {
                [dataId]: dataFromJson
            };
            const dataFromNewFile = fs_1.default.readFileSync(__dirname + "\\data\\new-data.json", 'utf-8').toString();
            if (dataFromNewFile == "{}") {
                fs_1.default.writeFileSync(__dirname + "\\data\\new-data.json", JSON.stringify(dataChangeShape), 'utf-8');
            }
            return dataFromJson;
        };
        this.indexData = () => {
            const data = JSON.parse(fs_1.default.readFileSync(__dirname + "\\data\\new-data.json", 'utf-8').toString());
            return data;
        };
        this.show = (id) => {
            const data = this.indexData();
            const requiredData = data[id].components;
            return requiredData;
        };
        this.create = (data) => {
            const oldData = this.indexData();
            const dataId = data.id;
            const newData = {
                [dataId]: data
            };
            const allData = Object.assign(Object.assign({}, oldData), newData);
            fs_1.default.writeFileSync(__dirname + "\\data\\new-data.json", JSON.stringify(allData), 'utf-8');
            return `you create new topology with id: ${dataId}`;
        };
        this.remove = (id) => {
            const data = this.indexData();
            delete data[id];
            fs_1.default.writeFileSync(__dirname + "\\data\\new-data.json", JSON.stringify(data), 'utf-8');
            return `Item with id: ${id} has been deleted`;
        };
        this.showNetlist = (id, idNetlist) => {
            const data = this.indexData();
            const dataToSearch = data[id].components;
            for (const item of dataToSearch) {
                if (item.id === idNetlist) {
                    return item.netlist;
                }
            }
        };
    }
}
exports.Data = Data;
