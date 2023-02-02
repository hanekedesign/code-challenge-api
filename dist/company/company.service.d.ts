import { HttpService } from '@nestjs/axios';
export declare class CompanyService {
    private httpService;
    constructor(httpService: HttpService);
    find(): import("rxjs").Observable<{
        id: string;
        name: string;
        summary: string;
        valuation: string;
        ctoPropulsion: string;
        cto: string;
        ceo: string;
        coo: string;
        testSites: number;
        launchSites: number;
        vehicles: number;
        employees: number;
        founded: number;
        founder: string;
        links: {
            website: string;
            flickr: string;
            twitter: string;
            elonTwitter: string;
        };
        headquarters: {
            address: string;
            city: string;
            state: string;
        };
    }>;
}
