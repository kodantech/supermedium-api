import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'PhTa8t3FIyyRxFE$',
      appSecret: '661YrE8uxS^aiBZTtaCQUDtZtBwfuyBgoMl6F4kaLz&rH',
      serviceId: 'supermedium-api',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
