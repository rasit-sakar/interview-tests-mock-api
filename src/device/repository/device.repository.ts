import { Device } from '../../domain/model/device.model';

export abstract class DeviceRepository {
    abstract getDevicesBySiteId(siteId: string): Promise<Device[]>;
}
