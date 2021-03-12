import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)  },
  { path: 'infinitescroll', loadChildren: () => import('./infinitescroll/infinitescroll.module').then(m => m.InfinitescrollModule)  },
  { path: 'reactiveform', loadChildren: () => import('./reactive-form/reactiveform.module').then(m => m.ReactiveFormModule)  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }