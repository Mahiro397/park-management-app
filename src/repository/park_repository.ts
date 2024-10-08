import { PrismaClient } from '@prisma/client';
import { park } from "../schema/park_schema";

export class ParkRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    public async get_all_parks(): Promise<park[]> {
        return await this.prisma.park.findMany();
    };

    public async create_one(name: string, lon: number): Promise<park> {
        const park = await this.prisma.park.create({
            data: {
                name,
                lon,
            },
        });
        return park
    }
}

