import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { CatsModule } from './cats/cats.module';
import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [CatsModule, HealthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET }, HealthController);
  }
}
