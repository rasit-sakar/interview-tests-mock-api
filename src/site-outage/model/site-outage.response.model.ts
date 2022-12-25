import { Device } from 'src/domain/model/device.model';
import { Outage } from 'src/domain/model/outage.model';

export class SiteOutageResponseModel {
    id: string;
    name: string;
    begin: Date;
    end: Date;

    static fromModel(outage: Outage, devices: Device[]): SiteOutageResponseModel {
        return {
            id: outage.id,
            begin: outage.begin,
            end: outage.end,
            name: devices.find((device) => device.id == outage.deviceId).name,
        };
    }
    static fromModels(outages: Outage[], devices: Device[]): SiteOutageResponseModel[] {
        return outages.map((outage) => SiteOutageResponseModel.fromModel(outage, devices));
    }
}
