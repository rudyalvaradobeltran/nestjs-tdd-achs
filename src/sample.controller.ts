import { Controller, Get } from '@nestjs/common';

/**
 * Aquí ustedes deben escribir su código.
 */
@Controller('sample')
export class SampleController
{
    @Get()
    sample(): string
    {
        return 'Hola Mundo';
    }
}
