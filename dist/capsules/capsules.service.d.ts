import { HttpService } from '@nestjs/axios';
export declare class CapsulesService {
    private httpService;
    constructor(httpService: HttpService);
    findAll(): import("rxjs").Observable<{
        id: string;
        type: string;
        status: string;
        serial: string;
        launches: string[];
        lastUpdate: string;
        landLandings: number;
        waterLandings: number;
        reuseCount: number;
    }[]>;
    findOne(id: string): import("rxjs").Observable<{
        id: string;
        type: string;
        status: string;
        serial: string;
        launches: string[];
        lastUpdate: string;
        landLandings: number;
        waterLandings: number;
        reuseCount: number;
    }>;
}
