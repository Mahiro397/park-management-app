import express, { Request, response, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import park_router from './routes/park_rote';



const app = express();
const port = 3000;
const prisma = new PrismaClient();
app.use(express.json());

app.use('/park', park_router);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


