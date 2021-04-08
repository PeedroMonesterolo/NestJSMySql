import { Connection } from 'typeorm';
import { ProductEntity } from '../../modules/inventario/entity/product.entity';

export const ProductProvider = [
    {
      provide: 'PRODUCT_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(ProductEntity),
      inject: ['127.0.0.1'],
    }
];