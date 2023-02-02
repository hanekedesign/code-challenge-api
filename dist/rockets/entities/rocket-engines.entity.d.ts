import { RocketISP } from './rocket-isp.entity';
import { RocketThrust } from './rocket-thrust.entity';
export declare class RocketEngines {
    number?: number;
    type?: string;
    layout?: string;
    version?: string;
    thrustToWeight?: number;
    engineLossMax?: number;
    propellant1?: string;
    propellant2?: string;
    thrustSeaLevel?: RocketThrust;
    thrustVacuum?: RocketThrust;
    isp?: RocketISP;
}
