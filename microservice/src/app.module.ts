import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { Users, UsersSchema } from './Schems_test/users.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    load: [configuration],
    }),
    MongooseModule.forRoot( `${process.env.MONGO_URL}`), 
    MongooseModule.forFeature([{ 
      name: Users.name,
      schema: UsersSchema
      }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
