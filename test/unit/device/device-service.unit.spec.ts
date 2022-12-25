import { DeviceRepository } from '../../../src/device/repository/device.repository';
import { DeviceService } from '../../../src/device/service/device.service';
import { Device } from '../../../src/domain/model/device.model';

const site1Devices: Device[] = [
    { id: '1', name: 'Device 11', siteId: '1' },
    { id: '2', name: 'Device 12', siteId: '1' },
];

const deviceData: Device[] = [...site1Devices, { id: '3', name: 'Device 33', siteId: '3' }];

describe('Device Service Unit Test', () => {
    let deviceRepository: DeviceRepository;

    beforeAll(() => {
        deviceRepository = jest.mocked<DeviceRepository>({
            getDevicesBySiteId: jest.fn(async (siteId: string) => {
                return deviceData.filter((device) => device.siteId == siteId);
            }),
        });
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getDevicesBySiteId ', () => {
        it('Respository should be called once', async () => {
            const deviceService = new DeviceService(deviceRepository);
            await deviceService.getDevicesBySiteId('1');
            expect(deviceRepository.getDevicesBySiteId).toBeCalledTimes(1);
        });

        it('Should return devices', async () => {
            const deviceService = new DeviceService(deviceRepository);
            const result = await deviceService.getDevicesBySiteId('1');
            expect(result).not.toBeNull();
            expect(result.length).toBe(site1Devices.length);
            expect(result.map((device) => device.id).sort()).toEqual(
                site1Devices.map((device) => device.id).sort(),
            );
        });

        it('Should return empty array', async () => {
            const deviceService = new DeviceService(deviceRepository);
            const result = await deviceService.getDevicesBySiteId('-1');
            expect(result).not.toBeNull();
            expect(result.length).toBe(0);
        });
    });
});
