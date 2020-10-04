import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from '../posts/posts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts', loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule)  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }