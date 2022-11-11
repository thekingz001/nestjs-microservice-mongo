import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './Dto_test/creat-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }

  @Post('createUsertest')
  async createUsertest(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUsertest(createUserDto);
  }
}
