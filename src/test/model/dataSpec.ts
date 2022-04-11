import { Data } from "../../model/data";

const d = new Data();

describe("Data Model",()=>{
    it("should write data in new JSON",()=>{
        const data = d.firstTime();
        expect(data).toBeDefined();
    })
    it("should return data",()=>{
        const data = d.indexData();
        expect(data).toBeDefined();
    })
    it("should show data",()=>{
        const data = d.show("top1");
        expect(data).toBeDefined();
    })
    it("should create data",()=>{
        const dataToCreate = {
            id: "top2"
        };
        const data = d.create(dataToCreate);
        expect(data).toEqual(`you create new topology with id: ${dataToCreate.id}`);
    })
    it("should remove data",()=>{
        const idDataToRemove = "top2";
        const data = d.remove(idDataToRemove);
        expect(data).toEqual(`Item with id: ${idDataToRemove} has been deleted`);
    })
    it("should return Netlist",()=>{
        const id = "top1";
        const idNetlist = "res1"
        const data = d.showNetlist(id,idNetlist);
        expect(data).toBeDefined();
    })
})
