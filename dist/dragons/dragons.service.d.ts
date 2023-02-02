import { HttpService } from '@nestjs/axios';
export declare class DragonsService {
    private httpService;
    constructor(httpService: HttpService);
    findAll(): import("rxjs").Observable<{
        id: string;
        type: string;
        name: string;
        wikipedia: string;
        description: string;
        active: boolean;
        thrusters: {
            type: string;
            amount: number;
            pods: number;
            isp: number;
            fuel1: string;
            fuel2: string;
            thrust: {
                kN: number;
                lbf: number;
            };
        }[];
        dryMassLb: number;
        dryMassKg: number;
        orbitDurationYr: number;
        sidewallAngleDeg: number;
        crewCapacity: number;
        flickrImages: string[];
        firstFlight: string;
        diameter: {
            meters: number;
            feet: number;
        };
        heightWTrunk: {
            meters: number;
            feet: number;
        };
        trunk: {
            trunkVolume: {
                cubicMeters: number;
                cubicFeet: number;
            };
            cargo: {
                solarArray: number;
                unpressurizedCargo: boolean;
            };
        };
        pressurizedCapsule: {
            payloadVolume: {
                cubicMeters: number;
                cubicFeet: number;
            };
        };
        returnPayloadVol: {
            cubicMeters: number;
            cubicFeet: number;
        };
        returnPayloadMass: {
            kg: number;
            lb: number;
        };
        launchPayloadVol: {
            cubicMeters: number;
            cubicFeet: number;
        };
        launchPayloadMass: {
            kg: number;
            lb: number;
        };
        heatShield: {
            material: string;
            sizeMeters: number;
            tempDegrees: number;
            devPartner: string;
        };
    }[]>;
    findOne(id: string): import("rxjs").Observable<{
        id: string;
        type: string;
        name: string;
        wikipedia: string;
        description: string;
        active: boolean;
        thrusters: {
            type: string;
            amount: number;
            pods: number;
            isp: number;
            fuel1: string;
            fuel2: string;
            thrust: {
                kN: number;
                lbf: number;
            };
        }[];
        dryMassLb: number;
        dryMassKg: number;
        orbitDurationYr: number;
        sidewallAngleDeg: number;
        crewCapacity: number;
        flickrImages: string[];
        firstFlight: string;
        diameter: {
            meters: number;
            feet: number;
        };
        heightWTrunk: {
            meters: number;
            feet: number;
        };
        trunk: {
            trunkVolume: {
                cubicMeters: number;
                cubicFeet: number;
            };
            cargo: {
                solarArray: number;
                unpressurizedCargo: boolean;
            };
        };
        pressurizedCapsule: {
            payloadVolume: {
                cubicMeters: number;
                cubicFeet: number;
            };
        };
        returnPayloadVol: {
            cubicMeters: number;
            cubicFeet: number;
        };
        returnPayloadMass: {
            kg: number;
            lb: number;
        };
        launchPayloadVol: {
            cubicMeters: number;
            cubicFeet: number;
        };
        launchPayloadMass: {
            kg: number;
            lb: number;
        };
        heatShield: {
            material: string;
            sizeMeters: number;
            tempDegrees: number;
            devPartner: string;
        };
    }>;
}
