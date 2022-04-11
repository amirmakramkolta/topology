import express from 'express';
import bodyParse from 'body-parser';
import { dataRoute } from './handler/dataEndpoint';

const app = express();
const port = 3000;
app.use(bodyParse.json());

dataRoute(app);

app.listen(port,()=>{
    console.log(`listen to http://localhost:${port}`);
})
