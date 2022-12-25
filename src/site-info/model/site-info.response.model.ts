import { Device } from 'src/domain/model/device.model';
import { SiteInfo } from 'src/domain/model/site-info.model';

class DeviceResponseModel {
    id: string;
    name: string;

    static fromModel(device: Device): DeviceResponseModel {
        return {
            id: device.id,
            name: device.name,
        };
    }
}

export class SiteInfoResponseModel {
    id: string;
    name: string;
    devices: DeviceResponseModel[];

    static fromModel(siteInfo: SiteInfo): SiteInfoResponseModel {
        return {
            id: siteInfo.id,
            name: siteInfo.name,
            devices: siteInfo.devices.map((device) => DeviceResponseModel.fromModel(device)),
        };
    }
}
