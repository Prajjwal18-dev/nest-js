import { Controller, Get } from '@nestjs/common';

@Controller('user')                //decorator - specify the path
export class UserController {
    @Get()                         //get decorator - called when user does a get request on route 'user' i.e /user
    getUser(){
        return "I am user";
    }
}
