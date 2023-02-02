import { CoresService } from './cores.service';
export declare class CoresResolver {
    private readonly coresService;
    constructor(coresService: CoresService);
    findAll(): import("rxjs").Observable<{
        id: string;
        status: string;
        serial: string;
        launches: string[];
        lastUpdate: string;
        reuseCount: number;
        block: number;
        asdsLandings: number;
        asdsAttempts: number;
        rtlsLandings: number;
        rtlsAttempts: number;
    }[]>;
    findOne(id: string): import("rxjs").Observable<{
        id: string;
        status: string;
        serial: string;
        launches: string[];
        lastUpdate: string;
        reuseCount: number;
        block: number;
        asdsLandings: number;
        asdsAttempts: number;
        rtlsLandings: number;
        rtlsAttempts: number;
    }>;
}
