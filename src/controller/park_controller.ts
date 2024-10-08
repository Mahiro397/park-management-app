import { Request, Response } from "express"
import { ParkService } from '../service/park_srvice';
import { park } from "../schema/park_schema";

export class ParkController {
    private park_service: ParkService;

    constructor() {
        this.park_service = new ParkService();
    }

    // 全ての公園を取得する非同期メソッド
    public async get_all_parks(): Promise<park[]> {
        return await this.park_service.get_all_parks();  // メソッドを実行
    }

    public async create_one(name: string, lon: number): Promise<park> {
        const park = await this.park_service.create_one(name, lon);
        return park
    }
}


export const helloWorld = async (req: Request, res: Response) => {
    res.send("Hello World");
};


