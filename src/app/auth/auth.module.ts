import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class AuthModule {}
