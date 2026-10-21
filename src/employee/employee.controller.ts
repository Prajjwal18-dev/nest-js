import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service.js';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly empService: EmployeeService){}

    @Get('all')
    getEmployees(){
        return this.empService.getAllEmployees()
    }
    @Get(':id')
    getEmployeeById(@Param("id") id:String){
        return this.empService.getEmployeeById(Number(id))
    }

}
