import { SiteInfo } from '../../domain/model/site-info.model';

export abstract class SiteInfoRepository {
    abstract getSiteInfo(siteId: string): Promise<SiteInfo>;
}
