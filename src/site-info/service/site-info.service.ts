import { Injectable } from '@nestjs/common';
import { DeviceService } from '../../device/service/device.service';
import { SiteInfoNotFoundException } from '../../domain/exception/site-not-found.exception';
import { SiteInfo } from '../../domain/model/site-info.model';
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
        if (!siteInfo) {
            throw new SiteInfoNotFoundException();
        }
        return siteInfo;
    }

    async getSiteInfoWithDevices(siteId: string): Promise<SiteInfoResponseModel> {
        const siteInfo = await this.getSiteInfo(siteId);
        siteInfo.devices = await this.deviceService.getDevicesBySiteId(siteId);
        return SiteInfoResponseModel.fromModel(siteInfo);
    }
}
