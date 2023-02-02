import { LaunchpadsService } from './launchpads.service';
export declare class LaunchpadsResolver {
    private readonly launchpadsService;
    constructor(launchpadsService: LaunchpadsService);
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
