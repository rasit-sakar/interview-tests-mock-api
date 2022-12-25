import { Device } from './device.model';

export interface SiteInfo {
    id: string;
    name: string;
    devices?: Device[];
}
