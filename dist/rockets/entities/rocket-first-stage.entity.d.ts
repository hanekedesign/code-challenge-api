import { RocketThrust } from './rocket-thrust.entity';
export declare class RocketFirstStage {
    id?: string;
    name?: string;
    type?: string;
    burnTimeSec?: number;
    fuelAmountTons?: number;
    engines?: number;
    reusable?: boolean;
    thrustVacuum?: RocketThrust;
    thrustSeaLevel?: RocketThrust;
}
