import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees = [
        {id:1,name:"First"},
        {id:2,name:"Second"},
        {id:3,name:"Third"},
    ]
    getAllEmployees(){
        return this.employees;
    }
    getEmployeeById(id: number){
        return this.employees.find((emp)=>emp.id===id)
    }
}
