import { HttpService } from '@nestjs/axios';
export declare class LaunchpadsService {
    private httpService;
    constructor(httpService: HttpService);
    findAll(): import("rxjs").Observable<{
        id: string;
        type: string;
        status: string;
        launches: string[];
        name: string;
        wikipedia: string;
        fullName: string;
        details: string;
        locality: string;
        region: string;
        latitude: number;
        longitude: number;
        landingAttempts: number;
        landingSuccesses: number;
        images: {
            large: string[];
        };
    }[]>;
    findOne(id: string): import("rxjs").Observable<{
        id: string;
        type: string;
        status: string;
        launches: string[];
        name: string;
        wikipedia: string;
        fullName: string;
        details: string;
        locality: string;
        region: string;
        latitude: number;
        longitude: number;
        landingAttempts: number;
        landingSuccesses: number;
        images: {
            large: string[];
        };
    }>;
}
