import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TripModel } from './trips.model';
import { Model } from 'mongoose';
import { UpdateTripDTO } from './trips.dto';

interface Trip {
  name: string;
  direction: string;
  price: number;
  priceCurrency: string;
  daysDuration: number;
  description: string;
  sightseeings: string[];
  transport: string;
}

@Injectable()
export class TripsService {
  constructor(@InjectModel('trips') private tripModel: Model<TripModel>) {}

  async createTrip(trip: Trip): Promise<TripModel> {
    const newTrip = new this.tripModel({
      name: await trip.name,
      direction: await trip.direction,
      price: await trip.price,
      priceCurrency: await trip.priceCurrency,
      daysDuration: await trip.daysDuration,
      description: await trip.description,
      sightseeings: await trip.sightseeings,
      transport: await trip.transport,
    });
    try {
      return newTrip.save();
    } catch (error) {
      throw new NotFoundException('Trip not created! Try to use unique names');
    }
  }

  async getAllTrips(): Promise<TripModel[]> {
    const tripsData = await this.tripModel.find();
    if (!tripsData || tripsData.length == 0) {
      throw new NotFoundException('Trips data not found!');
    }
    return tripsData;
  }

  async getTripById(tripId: string): Promise<TripModel> {
    const existingTrip = await this.tripModel.findById(tripId).exec();
    if (!existingTrip) {
      throw new NotFoundException(`Trip #${tripId} not found`);
    }
    return existingTrip;
  }

  async updateTrip(tripId: string, updateTripDto: UpdateTripDTO): Promise<TripModel> {
    const existingTrip = await this.tripModel.findByIdAndUpdate(tripId, updateTripDto, {
      new: true,
    });
    if (!existingTrip) {
      throw new NotFoundException(`Trip #${tripId} not found`);
    }
    return existingTrip;
  }

  async deleteTrip(tripId: string): Promise<string> {
    const deletedTrip = await this.tripModel.findByIdAndDelete(tripId);
    if (!deletedTrip) {
      throw new NotFoundException(`Trip #${tripId} not found`);
    }
    return tripId;
  }
}
