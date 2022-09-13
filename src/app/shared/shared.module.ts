import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavigationComponent, InputComponent, ButtonComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [NavigationComponent, InputComponent, ButtonComponent],
})
export class SharedModule {}
