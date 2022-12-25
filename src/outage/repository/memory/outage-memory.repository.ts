import { Injectable } from '@nestjs/common';
import { Outage } from '../../../domain/model/outage.model';
import { OutageRepository } from '../outage.repository';
import { data } from './staticData';

@Injectable()
export class OutageMemoryRepository extends OutageRepository {
    async getOutages(): Promise<Outage[]> {
        return data;
    }

    async getOutagesByDeviceIds(deviceIds: string[]): Promise<Outage[]> {
        const result = data.filter((outage) =>
            deviceIds.includes(outage.deviceId),
        );
        return result;
    }
}
