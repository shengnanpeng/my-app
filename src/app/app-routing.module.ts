import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazyload模式路由，适合服务端渲染
// const SSRroutes: Routes = [
//   {
//     path: '',
//     children: []
//   },
//   { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
//   { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
//   { path: '**', redirectTo: '', pathMatch: 'full' },
// ];

// SPA模式路由，适合客户端打包
import { LoginPageComponent } from '../pages/user/login-page/login-page.component';
const SPAroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent}
];

// 配置路由模式
const routes = SPAroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
