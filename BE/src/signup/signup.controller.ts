import { Controller, Post, Body } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDTO } from './signup.dto';

@Controller('signup') //http://localhost:8000/signup
export class SignupController {

    constructor(
        private readonly SignupService: SignupService
    ){}

    @Post()
    signup(@Body() signupDTO: SignupDTO){
        return this.SignupService.signup(signupDTO)
    }
}
