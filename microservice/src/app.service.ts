import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserEvent } from './Event_test/creat-user.event';
import { Users, UsersDocument } from './Schems_test/users.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>) {}
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    // this.analytics.push({
    //   username: data.username,
    //   password: data.username,
    //   timestamp: new Date(),
    // });
    const test = this.usersModel.create({
      username: data.username,
      password: data.username,
    });
    console.log('Event adding Data');
    return test;
  }

  getAnalytics() {
    // return this.analytics;
    return this.usersModel.find();
  }

  userCreated(data: any) {
    return this.usersModel.create({
      username: data.username,
      password: data.username,
    });
  }

}
