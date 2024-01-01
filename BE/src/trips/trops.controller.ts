import { Controller, Post, Body, Res, HttpStatus, Get, Param, Put, Delete } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripDTO, UpdateTripDTO } from './trips.dto';

@Controller('trips') //http://localhost:8000/trips
export class TripsController {

    constructor(
        private readonly TripsService: TripsService
    ){}

    @Post()
    signup(@Body() tripDTO: TripDTO){
        return this.TripsService.trip(tripDTO)
    }

    @Get()
    async getTrips(@Res() response) {
    try {
        const tripsData = await this.TripsService.getAllTrips();
        return response.status(HttpStatus.OK).json({
        message: 'All trips data found successfully',tripsData,});
    } catch (err) {
        return response.status(err.status).json(err.response);
    }
    }

    @Get('/:id')
    async getTrip(@Res() response, @Param('id') tripId: string) {
    try {
        const existingTrip = await this.TripsService.getTripById(tripId);
        return response.status(HttpStatus.OK).json({
        message: 'Trip found successfully', existingTrip,});
    } catch (err) {
        return response.status(err.status).json(err.response);
    }
    }

    @Put('/:id')
    async updateStudent(
        @Res() response, 
        @Param('id') tripId: string,
        @Body() updateTripDto: UpdateTripDTO
    ) {
        try {
            const existingTrip = await this.TripsService.updateTrip(tripId, updateTripDto);
            return response.status(HttpStatus.OK).json({
                message: 'Trip has been successfully updated',
                existingTrip,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteTrip(@Res() response, @Param('id') tripId: string)
    {
        try {
            const deletedTrip = await this.TripsService.deleteTrip(tripId);
            return response.status(HttpStatus.OK).json({
                message: 'Trip deleted successfully',
                deletedTrip,
            });
        }catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

}
