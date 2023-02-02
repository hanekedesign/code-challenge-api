import { CompanyHeadquarters } from './company-headquarter.entity';
import { CompanyLinks } from './company-links.entity';
export declare class Company {
    id: string;
    name?: string;
    summary?: string;
    valuation?: string;
    ctoPropulsion?: string;
    cto?: string;
    ceo?: string;
    coo?: string;
    testSites?: number;
    launchSites?: number;
    vehicles?: number;
    employees?: number;
    founded?: number;
    founder?: string;
    links?: CompanyLinks;
    headquarters?: CompanyHeadquarters;
}
