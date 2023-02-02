import { CapsulesService } from './capsules.service';
export declare class CapsulesResolver {
    private readonly capsulesService;
    constructor(capsulesService: CapsulesService);
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
