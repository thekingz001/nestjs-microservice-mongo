import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './Event_test/creat-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  // @MessagePattern({ cmd: 'user_created' })
  async handleUserCreated(data: CreateUserEvent) {
    return this.appService.handleUserCreated(data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  async getAnalytics() {
    return this.appService.getAnalytics();
  }

  @MessagePattern({ cmd: 'user_createdtest' })
  async user_createdtest(data: any) {
    return this.appService.user_createdtest(data);
  }
}
