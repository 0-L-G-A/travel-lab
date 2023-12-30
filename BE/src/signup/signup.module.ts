import { Module } from '@nestjs/common';
import { SignupController } from './signup.controller';
import { SignupService } from './signup.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupSchema } from './signup.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name:"Signup",
      schema: SignupSchema
    }])
  ],
  controllers: [SignupController],
  providers: [SignupService],
  exports: [SignupService, SignupModule],
})
export class SignupModule {}
