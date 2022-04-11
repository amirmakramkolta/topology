"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataEndpoint_1 = require("../../handler/dataEndpoint");
const supertest_1 = __importDefault(require("supertest"));
describe("APIs test", () => {
    it("should return 200 status", () => {
        const data = {
            id: "top3"
        };
        const dataForNetlist = {
            id: "top1",
            netlist: "res1"
        };
        (0, supertest_1.default)(dataEndpoint_1.dataRoute).get("/first-time").expect(200);
        (0, supertest_1.default)(dataEndpoint_1.dataRoute).get("/index").expect(200);
        (0, supertest_1.default)(dataEndpoint_1.dataRoute).post("/create").send(data).expect(200);
        (0, supertest_1.default)(dataEndpoint_1.dataRoute).get("/show/top3").expect(200);
        (0, supertest_1.default)(dataEndpoint_1.dataRoute).get("/show-netlist").send(dataForNetlist).expect(200);
        (0, supertest_1.default)(dataEndpoint_1.dataRoute).delete("/delete/top3").expect(200);
    });
});
