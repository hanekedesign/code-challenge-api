import { RoadsterService } from './roadster.service';
export declare class RoadsterResolver {
    private readonly roadsterService;
    constructor(roadsterService: RoadsterService);
    find(): import("rxjs").Observable<{
        id: string;
        name: string;
        wikipedia: string;
        flickrImages: string[];
        details: string;
        longitude: number;
        eccentricity: number;
        video: string;
        orbitType: string;
        marsDistanceMi: number;
        marsDistanceKm: number;
        earthDistanceMi: number;
        earthDistanceKm: number;
        speedMph: number;
        speedKph: number;
        periodDays: number;
        periapsisArg: number;
        inclination: number;
        semiMajorAxisAu: number;
        periapsisAu: number;
        apoapsisAu: number;
        epochJd: number;
        noradId: number;
        launchMassLbs: number;
        launchMassKg: number;
        launchDateUtc: string;
        launchDateUnix: number;
    }>;
}
