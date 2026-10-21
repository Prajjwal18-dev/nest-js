import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')       // when user hits the route '/products'
export class ProductsController {
    constructor(private readonly productService: ProductsService){}  // this is how we inject service in controller (Controller Injection)
    
    @Get('all')
    getProducts(){
        return this.productService.getAllProducts();
    }
    @Get(':id')
    getProductById(@Param('id') id:string){          //here ':id' is a route parameter and we are extracting it by using @Param
        return this.productService.getProductById(Number(id)); // converting string id to number
    }


}
