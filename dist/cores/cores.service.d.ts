import { HttpService } from '@nestjs/axios';
export declare class CoresService {
    private httpService;
    constructor(httpService: HttpService);
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
