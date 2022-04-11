import { Data } from "../model/data";
import { Application, Request, Response } from "express";

const dataForEndpoints = new Data();

export const dataRoute = (app:Application)=>{
    app.get("/first-time",(req:Request,res:Response)=>{
        try{
            res.status(200);
            res.json(dataForEndpoints.firstTime());
        }catch{
            res.status(400)
            res.send("something wrong")
        }
    });
    app.get("/index",(req:Request,res:Response)=>{
        try{
            res.status(200);
            res.json(dataForEndpoints.indexData());
        }catch{
            res.status(400);
            res.send("something wrong");
        }
    });
    app.get("/show",(req:Request,res:Response)=>{
        try{
            const id:string = req.body.id;
            if(id == undefined||id == null){
                res.status(400);
                res.send("add ID");
            }else{
                const data = dataForEndpoints.show(id);
                if(data!=null){
                    res.status(200);
                    res.send(data);
                }else{
                    res.status(404);
                    res.send("data not found");
                }
            }
        }catch{
            res.status(400);
            res.send("something wrong");
        }
    });
    app.post("/create",(req:Request,res:Response)=>{
        try{
            const data = req.body
            if(data.id == undefined){
                res.status(400);
                res.send("Add ID");
            }else{
                const confirm = dataForEndpoints.create(data);
                res.status(200);
                res.send(confirm);
            }
        }catch{
            res.status(400);
            res.send("something wrong")
        }
    })
    app.delete("/delete",(req:Request,res:Response)=>{
        try{
            const id = req.body.id;
            if(id == undefined || id == null){
                res.status(400);
                res.send("add ID");
            }else{
                const confirm = dataForEndpoints.show(id);
                if(confirm==null||confirm==undefined){
                    res.status(404);
                    res.send("Sorry data not found");
                }else{
                    const deleteData = dataForEndpoints.remove(id);
                    res.status(200);
                    res.send(deleteData);
                }
            }
        }catch{
            res.status(400);
            res.send("something wrong");
        }
    })
    app.get("/show-netlist",(req:Request,res:Response)=>{
        try{
            const id = req.body.id;
            const netlistId = req.body.netlist;
            const data = dataForEndpoints.showNetlist(id,netlistId);
            if(data==null || data == undefined){
                res.status(404);
                res.send("data not found");
            }else{
                res.status(200);
                res.send(data);
            }
        }catch{
            res.status(400);
            res.send("something wrong")
        }
    })
}