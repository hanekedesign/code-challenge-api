import { StarlinkSpaceTrack } from './starlink-spacetrack.entity';
export declare class Starlink {
    id: string;
    version?: string;
    launch?: string;
    longitude?: number;
    latitude?: number;
    heightKm?: number;
    velocityKms?: number;
    spaceTrack?: StarlinkSpaceTrack;
}
