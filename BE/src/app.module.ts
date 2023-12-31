import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';
import { TripsModule } from './trips/trips.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://lol79lol97:nv1iQ6pvk2gWqO3j@travelapp.m1l32nq.mongodb.net/travelApp?retryWrites=true&w=majority'
    ),
    SignupModule,
    TripsModule,
  ],
})
export class AppModule {}
