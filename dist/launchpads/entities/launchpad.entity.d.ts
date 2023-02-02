import { LaunchpadImage } from './launchpad-image.entity';
export declare class Launchpad {
    id: string;
    name?: string;
    fullName?: string;
    details?: string;
    type?: string;
    locality?: string;
    region?: string;
    latitude?: number;
    longitude?: number;
    landingAttempts?: number;
    landingSuccesses?: number;
    wikipedia?: string;
    status?: string;
    launches?: string[];
    images?: LaunchpadImage;
}
