import { RocketPayload } from './rocket-payload.entity';
import { RocketThrust } from './rocket-thrust.entity';
export declare class RocketSecondStage {
    id?: string;
    burnTimeSec?: number;
    fuelAmountTons?: number;
    engines?: number;
    reusable?: boolean;
    thrust?: RocketThrust;
    payloads?: RocketPayload;
}
