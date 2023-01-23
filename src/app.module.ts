import { Module } from '@nestjs/common';

import { CatsModule } from './cats/cats.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [CatsModule, HealthModule],
})
export class AppModule {}
