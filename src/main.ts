import { NestFactory } from '@nestjs/core';
import { MainModule } from 'main.module';

/**
 * Initializes the app.
 */
async function bootstrap(): Promise<void>
{
    const app = await NestFactory.create(MainModule);

    app.enableCors();
    app.setGlobalPrefix('api');

    await app.listen(4001);
}

bootstrap();
