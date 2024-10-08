import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { helloWorld, ParkController } from '../controller/park_controller';
import { park } from "../schema/park_schema";


const park_router = express.Router()
const park_controller = new ParkController()


park_router.get('/', async (req: Request, res: Response) => {
    const parks = await park_controller.get_all_parks();
    res.json(parks);
})

park_router.get('/hello', helloWorld)

park_router.post('/', async (req: Request, res: Response) => {
    const { name, lon } = req.body;
    const park = await park_controller.create_one(name, lon)
    res.json(park);
});

export default park_router;