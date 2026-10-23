import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service.js';

@Controller('category')                           //Decorator
export class CategoryController {
    constructor(private readonly getCat: CategoryService){}   //Dependency injection

    @Get()
    getAllCategories(){
        return this.getCat.getCategories();
    }
}
