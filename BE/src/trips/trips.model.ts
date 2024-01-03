import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Trip {
  @Prop({ unique: true })
  name: String;
  @Prop()
  direction: String;
  @Prop()
  price: number;
  @Prop()
  priceCurrency: string;
  @Prop()
  daysDuration: number;
  @Prop()
  description: String;
  @Prop()
  sightseeings: String[];
  @Prop()
  transport: String;
}

export type TripModel = Trip & Document;

export const TripSchema = SchemaFactory.createForClass(Trip);
