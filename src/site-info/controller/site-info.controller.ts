import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader } from '@nestjs/swagger';
import { SiteInfoResponseModel } from '../model/site-info.response.model';
import { SiteInfoService } from '../service/site-info.service';

@Controller('site-info')
@ApiHeader({ name: 'x-api-key' })
export class SiteInfoController {
    constructor(private readonly siteInfoService: SiteInfoService) {}

    @Get(':siteId')
    @UseGuards(AuthGuard('api-key'))
    async getSiteInfo(@Param('siteId') siteId: string): Promise<SiteInfoResponseModel> {
        const result = await this.siteInfoService.getSiteInfoWithDevices(siteId);
        return result;
    }
}
