import { Injectable } from '@nestjs/common';
import { Device } from 'src/domain/model/device.model';
import { DeviceRepository } from '../device.repository';
import { data } from './staticData';

@Injectable()
export class DeviceMemoryRepository extends DeviceRepository {
    async getDevicesBySiteId(siteId: string): Promise<Device[]> {
        return data.filter((device) => device.siteId == siteId);
    }
}
