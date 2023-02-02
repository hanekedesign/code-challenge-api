import { HttpService } from '@nestjs/axios';
export declare class CrewsService {
    private httpService;
    constructor(httpService: HttpService);
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
