import { Module } from '@nestjs/common';
import { StudentController } from './student.controller.js';
import { StudentService } from './student.service.js';

// NOTE: When you use a Module (like StudentModule), register the controller and service HERE,
// not in AppModule. AppModule only needs to import StudentModule.
// This keeps things organized — each module manages its own controllers and providers.
@Module({
    controllers: [StudentController],
    providers: [StudentService],
})
export class StudentModule {}
