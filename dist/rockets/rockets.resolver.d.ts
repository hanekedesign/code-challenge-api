import { RocketsService } from './rockets.service';
export declare class RocketsResolver {
    private readonly rocketsService;
    constructor(rocketsService: RocketsService);
    findAll(): import("rxjs").Observable<{
        id: string;
        type: string;
        name: string;
        company: string;
        wikipedia: string;
        description: string;
        active: boolean;
        flickrImages: string[];
        firstFlight: string;
        diameter: {
            meters: number;
            feet: number;
        };
        engines: {
            number: number;
            type: string;
            isp: {
                seaLevel: number;
                vacuum: number;
            };
            layout: string;
            version: string;
            thrustToWeight: number;
            engineLossMax: number;
            propellant1: string;
            propellant2: string;
            thrustSeaLevel: {
                kN: number;
                lbf: number;
            };
            thrustVacuum: {
                kN: number;
                lbf: number;
            };
        };
        height: {
            meters: number;
            feet: number;
        };
        country: string;
        costPerLaunch: number;
        successRatePct: number;
        stages: number;
        boosters: number;
        firstStage: {
            id: string;
            type: string;
            name: string;
            thrustSeaLevel: {
                kN: number;
                lbf: number;
            };
            thrustVacuum: {
                kN: number;
                lbf: number;
            };
            burnTimeSec: number;
            fuelAmountTons: number;
            engines: number;
            reusable: boolean;
        };
        secondStage: {
            id: string;
            thrust: {
                kN: number;
                lbf: number;
            };
            payloads: {
                option1: string;
                compositeFairing: {
                    diameter: {
                        meters: number;
                        feet: number;
                    };
                    height: {
                        meters: number;
                        feet: number;
                    };
                };
            };
            burnTimeSec: number;
            fuelAmountTons: number;
            engines: number;
            reusable: boolean;
        };
        mass: {
            kg: number;
            lb: number;
        };
        landingLegs: {
            number: number;
            material: string;
        };
        payloadWeights: {
            id: string;
            name: string;
            kg: number;
            lb: number;
        }[];
    }[]>;
    findOne(id: string): import("rxjs").Observable<{
        id: string;
        type: string;
        name: string;
        company: string;
        wikipedia: string;
        description: string;
        active: boolean;
        flickrImages: string[];
        firstFlight: string;
        diameter: {
            meters: number;
            feet: number;
        };
        engines: {
            number: number;
            type: string;
            isp: {
                seaLevel: number;
                vacuum: number;
            };
            layout: string;
            version: string;
            thrustToWeight: number;
            engineLossMax: number;
            propellant1: string;
            propellant2: string;
            thrustSeaLevel: {
                kN: number;
                lbf: number;
            };
            thrustVacuum: {
                kN: number;
                lbf: number;
            };
        };
        height: {
            meters: number;
            feet: number;
        };
        country: string;
        costPerLaunch: number;
        successRatePct: number;
        stages: number;
        boosters: number;
        firstStage: {
            id: string;
            type: string;
            name: string;
            thrustSeaLevel: {
                kN: number;
                lbf: number;
            };
            thrustVacuum: {
                kN: number;
                lbf: number;
            };
            burnTimeSec: number;
            fuelAmountTons: number;
            engines: number;
            reusable: boolean;
        };
        secondStage: {
            id: string;
            thrust: {
                kN: number;
                lbf: number;
            };
            payloads: {
                option1: string;
                compositeFairing: {
                    diameter: {
                        meters: number;
                        feet: number;
                    };
                    height: {
                        meters: number;
                        feet: number;
                    };
                };
            };
            burnTimeSec: number;
            fuelAmountTons: number;
            engines: number;
            reusable: boolean;
        };
        mass: {
            kg: number;
            lb: number;
        };
        landingLegs: {
            number: number;
            material: string;
        };
        payloadWeights: {
            id: string;
            name: string;
            kg: number;
            lb: number;
        }[];
    }>;
}
