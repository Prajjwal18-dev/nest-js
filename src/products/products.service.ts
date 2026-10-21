import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {
            id:1 , name: "Mobile" , price: 20000
        },
        {
            id:2 , name: "laptop" , price: 30000
        },
        {
            id:3 , name: "Tablet" , price: 25000
        }
    ]
    getAllProducts(){
        return this.products;
    }
    getProductById(id: number){
        return this.products.find((product)=> product.id === id)
    }
}
