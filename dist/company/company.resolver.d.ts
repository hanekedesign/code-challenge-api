import { CompanyService } from './company.service';
export declare class CompanyResolver {
    private readonly companyService;
    constructor(companyService: CompanyService);
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
