import { LandpadsService } from './landpads.service';
export declare class LandpadsResolver {
    private readonly landpadsService;
    constructor(landpadsService: LandpadsService);
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
