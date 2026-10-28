import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service.js';

// NOTE: Each HTTP method has its own decorator in NestJS:
// @Get()    → handles GET requests     (Read data)
// @Post()   → handles POST requests    (Create data)
// @Put()    → handles PUT requests     (Full update / Replace)
// @Patch()  → handles PATCH requests   (Partial update)
// @Delete() → handles DELETE requests  (Remove data)

@Controller('student')                          // Base route: /student
export class StudentController {
    constructor(private readonly studentService: StudentService) {}  // Dependency Injection

    // ==================== GET ====================

    // GET /student/all → returns all students
    @Get('all')
    getAllStudents() {
        return this.studentService.getAllStudents();
    }

    // GET /student/:id → returns a single student by id
    // NOTE: @Param('id') extracts the route parameter from the URL
    @Get(':id')
    getStudentById(@Param('id') id: string) {
        return this.studentService.getStudentById(Number(id));
    }

    // ==================== POST ====================

    // POST /student → creates a new student
    // NOTE: @Body() extracts the entire request body (JSON sent by the client).
    // The client must send data in the request body (not URL), e.g.:
    // { "name": "John", "age": 20, "course": "B.Tech" }
    @Post()
    createStudent(@Body() body: { name: string; age: number; course: string }) {
        return this.studentService.createStudent(body);
    }

    // ==================== PUT ====================

    // PUT /student/:id → replaces the entire student data
    // NOTE: PUT = Full replacement. Client must send ALL fields.
    // Difference from PATCH: PUT expects complete data, PATCH expects partial data.
    @Put(':id')
    updateStudent(
        @Param('id') id: string,
        @Body() body: { name: string; age: number; course: string },
    ) {
        return this.studentService.updateStudent(Number(id), body);
    }

    // ==================== PATCH ====================

    // PATCH /student/:id → partially updates the student data
    // NOTE: PATCH = Partial update. Client can send only the fields they want to change.
    // Example: { "name": "New Name" } → only name gets updated, age and course remain same.
    @Patch(':id')
    patchStudent(
        @Param('id') id: string,
        @Body() body: Partial<{ name: string; age: number; course: string }>,
    ) {
        return this.studentService.patchStudent(Number(id), body);
    }

    // ==================== DELETE ====================

    // DELETE /student/:id → removes a student by id
    // NOTE: DELETE requests typically don't have a body.
    // The resource to delete is identified by the route parameter (:id).
    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id));
    }
}
