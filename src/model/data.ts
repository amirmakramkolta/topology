import fs from "fs";

export class Data{
    firstTime=()=>{
        const dataFromJson = JSON.parse(fs.readFileSync(__dirname+"\\data\\topology.json",'utf-8').toString());
        const dataId = dataFromJson.id
        const dataChangeShape={
            [dataId]:dataFromJson
        }
        const dataFromNewFile = fs.readFileSync(__dirname+"\\data\\new-data.json",'utf-8').toString();
        if(dataFromNewFile=="{}"){
            fs.writeFileSync(__dirname+"\\data\\new-data.json",JSON.stringify(dataChangeShape),'utf-8');
        }
        return dataFromJson;
    }
    
    indexData=()=>{
        const data = JSON.parse(fs.readFileSync(__dirname+"\\data\\new-data.json",'utf-8').toString());
        return data;
    }

    show=(id:string)=>{
        const data = this.indexData();
        const requiredData = data[id];
        return requiredData;
    }

    create=(data)=>{
        const oldData = this.indexData();
        const dataId = data.id;
        const newData = {
            [dataId]: data
        }
        const allData = {...oldData,...newData};
        fs.writeFileSync(__dirname+"\\data\\new-data.json",JSON.stringify(allData),'utf-8');
        return `you create new topology with id: ${dataId}`;
    }

    remove=(id:string)=>{
        const data = this.indexData();
        delete data[id];
        fs.writeFileSync(__dirname+"\\data\\new-data.json",JSON.stringify(data),'utf-8');
        return `Item with id: ${id} has been deleted`;
    }

    showNetlist=(id:string, idNetlist:string)=>{
        const data = this.indexData();

        const dataToSearch = data[id].components;

        for (const item of dataToSearch) {
            if(item.id === idNetlist){
                return item.netlist;
            }
        }
    }
}

