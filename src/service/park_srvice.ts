import { ParkRepository } from '../repository/park_repository';
import { park } from "../schema/park_schema";

export class ParkService {
    private park_repository: ParkRepository;

    constructor() {
        this.park_repository = new ParkRepository();
    }

    // 全ての公園を取得する非同期メソッド
    public async get_all_parks(): Promise<park[]> {
        return await this.park_repository.get_all_parks();
    }

    public async create_one(name: string, lon: number): Promise<park> {
        const park = await this.park_repository.create_one(name, lon);
        return park
    }
}
