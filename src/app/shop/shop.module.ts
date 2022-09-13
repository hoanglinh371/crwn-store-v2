import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { CategoryPreviewComponent } from './category-preview/category-preview.component';
import { CategoryComponent } from './category/category.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShopComponent,
    CategoryPreviewComponent,
    CategoryComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, SharedModule],
})
export class ShopModule {}
