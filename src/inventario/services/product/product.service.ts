import { Inject, Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/modules/inventario/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private readonly productRP: Repository<ProductEntity>
    ) { }

    async saveProduct(product: ProductEntity) {
        console.log('PRODUCTO: ', product)
        await this.productRP.insert(product);
        return product;
    }
    
    async updateProduct(id: number, product: any) {
        await this.productRP.update(id, product);
    }

    async findAll() {
        return await this.productRP.find();
    }

    async findOnProduct(id: number) {
        return await this.productRP.findOne(id);
    }

    async deleteProduct(id: number) {
        return await this.productRP.delete(id);
    }
}
