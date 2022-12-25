import { Outage } from '../../domain/model/outage.model';

export abstract class OutageRepository {
    abstract getOutages(): Promise<Outage[]>;
    abstract filterOutages(deviceIds: string[], beginDate: Date): Promise<Outage[]>;
}
