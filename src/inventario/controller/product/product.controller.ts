import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from 'src/models/product.interface';
import { ProductService } from '../../services/product/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    addProduct(@Body() productoModel: Product) {
        return this.productService.saveProduct(productoModel);
    }

    @Get() 
    getProduct(): any {
        return this.productService.findAll();
    }

    @Get(':id')
    getOneProduct(@Param() params): any {
        return this.productService.findOnProduct(params.id);
    }

    @Put(':id')
    updateProduct(@Body() productModel: Product, @Param() params): any {
        return this.productService.updateProduct(params.id, productModel);
    }

    @Put(':id')
    deleteProduct(@Param() params): any {
        return this.productService.deleteProduct(params.id);
    }
}
