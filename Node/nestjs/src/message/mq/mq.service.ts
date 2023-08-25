import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MqService {
  /**
   * 消息订阅
   */
  @RabbitSubscribe({
    exchange: 'exchangeA',
    routingKey: 'list',
    queue: 'queueA',
  })
  public async pubSubHandler(msg) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
