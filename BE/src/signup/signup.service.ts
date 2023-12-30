import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupModel } from './signup.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

interface User{
    username: string,
    email: string,
    password: string,
}

@Injectable()
export class SignupService {
    constructor(
        @InjectModel("Signup") private signupModel: Model<SignupModel>
    ){}

    async signup(user: User){
        const newUser = new this.signupModel({
            username: await user.username,
            email: await user.email,
            password: await bcrypt.hash(user.password, 10),
        })
        try{
            await newUser.save()
        }catch(err){
            console.log(err)
        }
    }
}
