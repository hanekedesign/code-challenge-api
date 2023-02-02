import { CrewsService } from './crews.service';
export declare class CrewsResolver {
    private readonly crewsService;
    constructor(crewsService: CrewsService);
    findAll(): import("rxjs").Observable<{
        id: string;
        status: string;
        launches: string[];
        name: string;
        agency: string;
        image: string;
        wikipedia: string;
    }[]>;
    findOne(id: string): import("rxjs").Observable<{
        id: string;
        status: string;
        launches: string[];
        name: string;
        agency: string;
        image: string;
        wikipedia: string;
    }>;
}
