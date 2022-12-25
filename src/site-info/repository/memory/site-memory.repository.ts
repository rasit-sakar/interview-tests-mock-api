import { Injectable } from '@nestjs/common';
import { SiteInfo } from '../../../domain/model/site-info.model';
import { SiteInfoRepository } from '../site-info.repository';
import { data } from './static-data';

@Injectable()
export class SiteInfoMemoryRepository extends SiteInfoRepository {
    async getSiteInfo(siteId: string): Promise<SiteInfo> {
        return data.find((site) => site.id == siteId);
    }
}
