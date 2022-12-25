import { Injectable } from '@nestjs/common';
import { Device } from '../../domain/model/device.model';
import { DeviceRepository } from '../repository/device.repository';

@Injectable()
export class DeviceService {
    constructor(private readonly deviceRepository: DeviceRepository) {}

    async getDevicesBySiteId(siteId: string): Promise<Device[]> {
        const result = await this.deviceRepository.getDevicesBySiteId(siteId);
        return result;
    }
}
