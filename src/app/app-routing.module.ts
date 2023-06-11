import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DefaultModule } from './layout/default/default.module';
import { DefaultComponent } from './layout/default/default.component';
import { PostsComponent } from './module/posts/posts.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component: DashboardComponent
  },{
    path:'posts',
    component: PostsComponent
}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
