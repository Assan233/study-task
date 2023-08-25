import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { MqService } from './mq.service';
import { MqController } from './mq.controller';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchangeA',
          type: 'topic',
        },
      ],
      uri: 'amqp://rabbitmq:rabbitmq@localhost:15672',
      channels: {
        channelA: {
          prefetchCount: 15,
          default: true,
        },
      },
    }),
    // MqModule,
  ],
  providers: [MqService],
  controllers: [MqController],
  //   controllers: [],
})
export class MqModule {}
