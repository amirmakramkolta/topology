"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRoute = void 0;
const data_1 = require("../model/data");
const dataForEndpoints = new data_1.Data();
const dataRoute = (app) => {
    app.get("/first-time", (req, res) => {
        try {
            res.status(200);
            res.json(dataForEndpoints.firstTime());
        }
        catch (_a) {
            res.status(400);
            res.send("something wrong");
        }
    });
    app.get("/index", (req, res) => {
        try {
            res.status(200);
            res.json(dataForEndpoints.indexData());
        }
        catch (_a) {
            res.status(400);
            res.send("something wrong");
        }
    });
    app.get("/show", (req, res) => {
        try {
            const id = req.params.id;
            if (id == undefined || id == null) {
                res.status(400);
                res.send("add ID");
            }
            else {
                const data = dataForEndpoints.show(id);
                if (data != null) {
                    res.status(200);
                    res.send(data);
                }
                else {
                    res.status(404);
                    res.send("data not found");
                }
            }
        }
        catch (_a) {
            res.status(400);
            res.send("something wrong");
        }
    });
    app.post("/create", (req, res) => {
        try {
            const data = req.body;
            if (data.id == undefined) {
                res.status(400);
                res.send("Add ID");
            }
            else {
                const confirm = dataForEndpoints.create(data);
                res.status(200);
                res.send(confirm);
            }
        }
        catch (_a) {
            res.status(400);
            res.send("something wrong");
        }
    });
    app.delete("/delete", (req, res) => {
        try {
            const id = req.params.id;
            if (id == undefined || id == null) {
                res.status(400);
                res.send("add ID");
            }
            else {
                const confirm = dataForEndpoints.show(id);
                if (confirm == null || confirm == undefined) {
                    res.status(404);
                    res.send("Sorry data not found");
                }
                else {
                    const deleteData = dataForEndpoints.remove(id);
                    res.status(200);
                    res.send(deleteData);
                }
            }
        }
        catch (_a) {
            res.status(400);
            res.send("something wrong");
        }
    });
    app.get("/show-netlist", (req, res) => {
        try {
            const id = req.body.id;
            const netlistId = req.body.netlist;
            const data = dataForEndpoints.showNetlist(id, netlistId);
            if (data == null || data == undefined) {
                res.status(404);
                res.send("data not found");
            }
            else {
                res.status(200);
                res.send(data);
            }
        }
        catch (_a) {
            res.status(400);
            res.send("something wrong");
        }
    });
};
exports.dataRoute = dataRoute;
