import { Module } from '@nestjs/common';
import { TripsController } from './trops.controller';
import { TripsService } from './trips.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TripSchema } from './trips.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name:"trips",
      schema: TripSchema
    }])
  ],
  controllers: [TripsController],
  providers: [TripsService],
  exports: [TripsService, TripsModule],
})
export class TripsModule {}
