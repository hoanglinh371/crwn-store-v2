import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPreviewComponent } from './category-preview/category-preview.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: 'shop',
    component: CategoryPreviewComponent,
  },
  {
    path: 'shop/:category',
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
