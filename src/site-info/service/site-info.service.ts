import { Injectable } from '@nestjs/common';
import { DeviceService } from 'src/device/service/device.service';
import { SiteInfo } from 'src/domain/model/site-info.model';
import { SiteInfoResponseModel } from '../model/site-info.response.model';
import { SiteInfoRepository } from '../repository/site-info.repository';

@Injectable()
export class SiteInfoService {
    constructor(
        private readonly siteRepository: SiteInfoRepository,
        private readonly deviceService: DeviceService,
    ) {}

    async getSiteInfo(siteId: string): Promise<SiteInfo> {
        const siteInfo = await this.siteRepository.getSiteInfo(siteId);
        siteInfo.devices = await this.deviceService.getDevicesBySiteId(siteId);
        return siteInfo;
    }

    async getSiteInfoWithMapping(siteId: string): Promise<SiteInfoResponseModel> {
        const siteInfo = await this.getSiteInfo(siteId);
        return SiteInfoResponseModel.fromModel(siteInfo);
    }
}
