import { Test, TestingModule } from '@nestjs/testing';
import { SampleController } from './sample.controller';

describe('SampleController', () =>
{
    let controller: SampleController;

    beforeEach(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ SampleController ]
        }).compile();

        controller = module.get<SampleController>(SampleController);
    });

    // Aquí usted debe escribir sus tests! (antes de codear en el controller).

    it('should be defined', () =>
    {
        expect(controller).toBeDefined();
    });

    it('value should be Hola Mundo', () =>
    {
        expect(controller.sample()).toBe('Hola Mundo');
    });
});
