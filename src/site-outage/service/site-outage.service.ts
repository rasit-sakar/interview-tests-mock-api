import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OutageConfig } from 'src/configurations/outage.config';
import { DeviceService } from 'src/device/service/device.service';
import { OutageService } from 'src/outage/service/outage.service';
import { SiteInfoService } from 'src/site-info/service/site-info.service';
import { SiteOutageResponseModel } from '../model/site-outage.response.model';

@Injectable()
export class SiteOutageService {
    constructor(
        private readonly configService: ConfigService,
        private readonly deviceService: DeviceService,
        private readonly outageService: OutageService,
        private readonly siteInfoService: SiteInfoService,
    ) {}

    async getOutagesySiteId(siteId: string): Promise<SiteOutageResponseModel[]> {
        const siteInfo = await this.siteInfoService.getSiteInfo(siteId);
        const beginDate = this.configService.get<OutageConfig>('outage').outageDateFilter;
        const devices = await this.deviceService.getDevicesBySiteId(siteInfo.id);
        const outages = await this.outageService.filterOutages(
            devices.map((device) => device.id),
            beginDate,
        );
        const result = SiteOutageResponseModel.fromModels(outages, devices);
        return result;
    }
}
