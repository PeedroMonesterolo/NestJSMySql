import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { InventarioModule } from './modules/inventario/inventario.module';
import { ProductService } from './inventario/services/product/product.service';
import { ProductController } from './inventario/controller/product/product.controller';
import { ProductProvider } from './providers/product/product';

@Module({
  imports: [
    InventarioModule,
    DatabaseModule
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, ...ProductProvider]
})
export class AppModule {}
