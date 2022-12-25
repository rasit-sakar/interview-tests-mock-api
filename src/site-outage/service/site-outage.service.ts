import { Injectable } from '@nestjs/common';
import { DeviceService } from 'src/device/service/device.service';
import { OutageService } from 'src/outage/service/outage.service';
import { SiteOutageResponseModel } from '../model/site-outage.response.model';

@Injectable()
export class SiteOutageService {
    constructor(
        private readonly deviceService: DeviceService,
        private readonly outageService: OutageService,
    ) {}

    async getOutagesySiteId(siteId: string): Promise<SiteOutageResponseModel[]> {
        const devices = await this.deviceService.getDevicesBySiteId(siteId);
        const outages = await this.outageService.getOutagesWithDeviceIds(
            devices.map((device) => device.id),
        );
        const result = SiteOutageResponseModel.fromModels(outages, devices);
        return result;
    }
}
