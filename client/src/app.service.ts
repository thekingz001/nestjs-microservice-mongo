import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './Dto_test/creat-user.dto';
import { CreateUserEvent } from './Event_test/creat-user.event';

var testarr = "";

@Injectable()
export class AppService {
  constructor(
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
  
  async createUser(createUserRequest: CreateUserDto) {
    const user_created = await this.analyticsClient.emit<string>(
      'user_created',
      new CreateUserEvent(createUserRequest.username,createUserRequest.password),
    ).subscribe((result) => console.log(result))
    // const user_created =  this.analyticsClient.send({ cmd: 'user_created' }, new CreateUserEvent(createUserRequest.username,createUserRequest.password));
    return user_created;
  }

  getAnalytics() {
    const get_analytics = this.analyticsClient.send<string>({ cmd: 'get_analytics' }, {});
    return get_analytics;
  }

  async userCreated(createUserRequest: CreateUserDto) {
      // const user_created =  this.analyticsClient.send<any>({ cmd: 'get_analytics' }, createUserRequest).subscribe((result) => console.log(JSON.stringify(result)))
      var get_analytics = await this.analyticsClient.send<any>({ cmd: 'userCreated' }, createUserRequest).toPromise();
      return get_analytics;
  }
}
