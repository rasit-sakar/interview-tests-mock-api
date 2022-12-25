import { Injectable } from '@nestjs/common';
import { Outage } from '../../../domain/model/outage.model';
import { OutageRepository } from '../outage.repository';
import { data } from './static-data';

@Injectable()
export class OutageMemoryRepository extends OutageRepository {
    async getOutages(): Promise<Outage[]> {
        return data;
    }

    async filterOutages(deviceIds: string[], beginDate: Date): Promise<Outage[]> {
        const result = data.filter(
            (outage) => outage.begin > beginDate && deviceIds.includes(outage.deviceId),
        );
        return result;
    }
}
