import { HttpService } from '@nestjs/axios';
export declare class LaunchesService {
    private httpService;
    constructor(httpService: HttpService);
    findAll(): import("rxjs").Observable<{
        id: string;
        capsules: string[];
        name: string;
        links: {
            patch: {
                large: string;
                small: string;
            };
            flickr: {
                small: string[];
                original: string[];
            };
            wikipedia: string;
            reddit: {
                campaign: string;
                launch: string;
                media: string;
                recovery: string;
            };
            presskit: string;
            webcast: string;
            youtubeId: string;
            article: string;
        };
        cores: {
            id: string;
            core: string;
            landpad: string;
            flight: number;
            gridfins: boolean;
            legs: boolean;
            reused: boolean;
            landingAttempt: boolean;
            landingSuccess: boolean;
            landingType: string;
        }[];
        crew: string[];
        details: string;
        ships: string[];
        flightNumber: number;
        upcoming: boolean;
        success: boolean;
        tbd: boolean;
        net: boolean;
        autoUpdate: boolean;
        payloads: string[];
        failures: {
            time: number;
            altitude: number;
            reason: string;
        }[];
        staticFireDateUtc: string;
        staticFireDateUnix: number;
        dateUtc: string;
        dateUnix: number;
        dateLocal: string;
        datePrecision: string;
        fairings: {
            reused: boolean;
            recovered: boolean;
            recoveryAttempt: boolean;
            ships: string[];
        };
        window: number;
        rocket: string;
        launchpad: string;
        launchLibraryId: string;
    }[]>;
    findAllPast(): import("rxjs").Observable<{
        id: string;
        capsules: string[];
        name: string;
        links: {
            patch: {
                large: string;
                small: string;
            };
            flickr: {
                small: string[];
                original: string[];
            };
            wikipedia: string;
            reddit: {
                campaign: string;
                launch: string;
                media: string;
                recovery: string;
            };
            presskit: string;
            webcast: string;
            youtubeId: string;
            article: string;
        };
        cores: {
            id: string;
            core: string;
            landpad: string;
            flight: number;
            gridfins: boolean;
            legs: boolean;
            reused: boolean;
            landingAttempt: boolean;
            landingSuccess: boolean;
            landingType: string;
        }[];
        crew: string[];
        details: string;
        ships: string[];
        flightNumber: number;
        upcoming: boolean;
        success: boolean;
        tbd: boolean;
        net: boolean;
        autoUpdate: boolean;
        payloads: string[];
        failures: {
            time: number;
            altitude: number;
            reason: string;
        }[];
        staticFireDateUtc: string;
        staticFireDateUnix: number;
        dateUtc: string;
        dateUnix: number;
        dateLocal: string;
        datePrecision: string;
        fairings: {
            reused: boolean;
            recovered: boolean;
            recoveryAttempt: boolean;
            ships: string[];
        };
        window: number;
        rocket: string;
        launchpad: string;
        launchLibraryId: string;
    }[]>;
    findOne(id: string): import("rxjs").Observable<{
        id: string;
        capsules: string[];
        name: string;
        links: {
            patch: {
                large: string;
                small: string;
            };
            flickr: {
                small: string[];
                original: string[];
            };
            wikipedia: string;
            reddit: {
                campaign: string;
                launch: string;
                media: string;
                recovery: string;
            };
            presskit: string;
            webcast: string;
            youtubeId: string;
            article: string;
        };
        cores: {
            id: string;
            core: string;
            landpad: string;
            flight: number;
            gridfins: boolean;
            legs: boolean;
            reused: boolean;
            landingAttempt: boolean;
            landingSuccess: boolean;
            landingType: string;
        }[];
        crew: string[];
        details: string;
        ships: string[];
        flightNumber: number;
        upcoming: boolean;
        success: boolean;
        tbd: boolean;
        net: boolean;
        autoUpdate: boolean;
        payloads: string[];
        failures: {
            time: number;
            altitude: number;
            reason: string;
        }[];
        staticFireDateUtc: string;
        staticFireDateUnix: number;
        dateUtc: string;
        dateUnix: number;
        dateLocal: string;
        datePrecision: string;
        fairings: {
            reused: boolean;
            recovered: boolean;
            recoveryAttempt: boolean;
            ships: string[];
        };
        window: number;
        rocket: string;
        launchpad: string;
        launchLibraryId: string;
    }>;
    findLatest(): import("rxjs").Observable<{
        id: string;
        capsules: string[];
        name: string;
        links: {
            patch: {
                large: string;
                small: string;
            };
            flickr: {
                small: string[];
                original: string[];
            };
            wikipedia: string;
            reddit: {
                campaign: string;
                launch: string;
                media: string;
                recovery: string;
            };
            presskit: string;
            webcast: string;
            youtubeId: string;
            article: string;
        };
        cores: {
            id: string;
            core: string;
            landpad: string;
            flight: number;
            gridfins: boolean;
            legs: boolean;
            reused: boolean;
            landingAttempt: boolean;
            landingSuccess: boolean;
            landingType: string;
        }[];
        crew: string[];
        details: string;
        ships: string[];
        flightNumber: number;
        upcoming: boolean;
        success: boolean;
        tbd: boolean;
        net: boolean;
        autoUpdate: boolean;
        payloads: string[];
        failures: {
            time: number;
            altitude: number;
            reason: string;
        }[];
        staticFireDateUtc: string;
        staticFireDateUnix: number;
        dateUtc: string;
        dateUnix: number;
        dateLocal: string;
        datePrecision: string;
        fairings: {
            reused: boolean;
            recovered: boolean;
            recoveryAttempt: boolean;
            ships: string[];
        };
        window: number;
        rocket: string;
        launchpad: string;
        launchLibraryId: string;
    }>;
    findNext(): import("rxjs").Observable<{
        id: string;
        capsules: string[];
        name: string;
        links: {
            patch: {
                large: string;
                small: string;
            };
            flickr: {
                small: string[];
                original: string[];
            };
            wikipedia: string;
            reddit: {
                campaign: string;
                launch: string;
                media: string;
                recovery: string;
            };
            presskit: string;
            webcast: string;
            youtubeId: string;
            article: string;
        };
        cores: {
            id: string;
            core: string;
            landpad: string;
            flight: number;
            gridfins: boolean;
            legs: boolean;
            reused: boolean;
            landingAttempt: boolean;
            landingSuccess: boolean;
            landingType: string;
        }[];
        crew: string[];
        details: string;
        ships: string[];
        flightNumber: number;
        upcoming: boolean;
        success: boolean;
        tbd: boolean;
        net: boolean;
        autoUpdate: boolean;
        payloads: string[];
        failures: {
            time: number;
            altitude: number;
            reason: string;
        }[];
        staticFireDateUtc: string;
        staticFireDateUnix: number;
        dateUtc: string;
        dateUnix: number;
        dateLocal: string;
        datePrecision: string;
        fairings: {
            reused: boolean;
            recovered: boolean;
            recoveryAttempt: boolean;
            ships: string[];
        };
        window: number;
        rocket: string;
        launchpad: string;
        launchLibraryId: string;
    }>;
}
