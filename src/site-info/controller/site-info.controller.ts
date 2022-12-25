import { Controller, Get, Param } from '@nestjs/common';
import { SiteInfoResponseModel } from '../model/site-info.response.model';
import { SiteInfoService } from '../service/site-info.service';

@Controller('site-info')
export class SiteInfoController {
    constructor(private readonly siteInfoService: SiteInfoService) {}

    @Get(':siteId')
    async getSiteInfo(@Param('siteId') siteId: string): Promise<SiteInfoResponseModel> {
        const result = await this.siteInfoService.getSiteInfoWithDevices(siteId);
        return result;
    }
}
