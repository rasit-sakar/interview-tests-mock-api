import { Outage } from './outage.model';

export interface Device {
    id: string;
    name: string;
    siteId: string;
    outages?: Outage[];
}
