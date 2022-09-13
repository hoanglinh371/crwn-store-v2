import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ShopRoutingModule } from './shop/shop-routing.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShopRoutingModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AuthModule,
    ShopModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
