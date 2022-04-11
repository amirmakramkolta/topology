import { dataRoute } from "../../handler/dataEndpoint";
import supertest from "supertest";

describe("APIs test",()=>{
    it("should return 200 status",()=>{
        const data = {
            id:"top3"
        }
        const dataForNetlist = {
            id: "top1",
            netlist: "res1"
        }
        supertest(dataRoute).get("/first-time").expect(200);
        supertest(dataRoute).get("/index").expect(200);
        supertest(dataRoute).post("/create").send(data).expect(200);
        supertest(dataRoute).get("/show/").send(data).expect(200);
        supertest(dataRoute).get("/show-netlist").send(dataForNetlist).expect(200);
        supertest(dataRoute).delete("/delete/").send(data).expect(200);
    })
})
