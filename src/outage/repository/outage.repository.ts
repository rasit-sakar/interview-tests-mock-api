import { Outage } from '../../domain/model/outage.model';

export abstract class OutageRepository {
    abstract getOutages(): Promise<Outage[]>;
    abstract getOutagesByDeviceIds(deviceIds: string[]): Promise<Outage[]>;
}
