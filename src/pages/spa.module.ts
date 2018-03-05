// 当打包部署静态包时，需要加载本Module

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule
  ],
})
export class SPAModule { }
