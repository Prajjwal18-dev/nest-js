import { Injectable, NotFoundException } from '@nestjs/common';

// NOTE: @Injectable() marks this class as a provider that can be injected into controllers or other services.
// It tells NestJS to manage this class's lifecycle (creates a singleton by default).
@Injectable()
export class StudentService {
    // NOTE: In a real app, this would be a database. We're using an in-memory array for learning purposes.
    private students = [
        { id: 1, name: 'Rahul', age: 20, course: 'B.Tech' },
        { id: 2, name: 'Priya', age: 22, course: 'M.Tech' },
        { id: 3, name: 'Amit', age: 21, course: 'BCA' },
    ];

    // GET all students
    getAllStudents() {
        return this.students;
    }

    // GET student by id
    getStudentById(id: number) {
        const student = this.students.find((s) => s.id === id);
        // NOTE: NotFoundException is a built-in NestJS exception.
        // It automatically returns a 404 status code with the message.
        // NestJS has many built-in exceptions: BadRequestException, UnauthorizedException, ForbiddenException, etc.
        if (!student) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        return student;
    }

    // POST - create a new student
    // NOTE: The 'body' here will come from @Body() in the controller.
    // In a real app, you'd use a DTO (Data Transfer Object) to validate the incoming data.
    createStudent(body: { name: string; age: number; course: string }) {
        const newStudent = {
            id: this.students.length + 1, // simple auto-increment (not production-safe)
            ...body, // spread operator to copy all properties from body
        };
        this.students.push(newStudent);
        return newStudent;
    }

    // PUT - replace the entire student object
    // NOTE: PUT replaces the ENTIRE resource. If a field is missing in the request body, it will be lost.
    // Example: if you send { name: "New Name" } without age/course, those fields will become undefined.
    updateStudent(id: number, body: { name: string; age: number; course: string }) {
        const index = this.students.findIndex((s) => s.id === id);
        if (index === -1) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        // Replace the entire object, keeping the same id
        this.students[index] = { id, ...body };
        return this.students[index];
    }

    // PATCH - partially update the student object
    // NOTE: PATCH only updates the fields that are sent in the request body.
    // Existing fields that are NOT in the body remain unchanged.
    // Partial<T> makes all properties of T optional — perfect for partial updates.
    patchStudent(id: number, body: Partial<{ name: string; age: number; course: string }>) {
        const index = this.students.findIndex((s) => s.id === id);
        if (index === -1) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        // Spread existing data first, then override with new data
        this.students[index] = { ...this.students[index], ...body };
        return this.students[index];
    }

    // DELETE - remove a student
    deleteStudent(id: number) {
        const index = this.students.findIndex((s) => s.id === id);
        if (index === -1) {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        // splice removes the element at 'index' and returns the removed elements as an array
        const deleted = this.students.splice(index, 1);
        return deleted[0]; // return the deleted student object
    }
}
