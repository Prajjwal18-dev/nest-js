import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service.js';
import { EmployeeController } from './employee.controller.js';

@Module({
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
