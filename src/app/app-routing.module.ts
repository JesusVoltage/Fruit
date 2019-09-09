import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sandbox',
    pathMatch: 'full'
  },
  {
    path: 'sandbox',
    loadChildren: () => import('./pages/sandbox/sandbox.module').then(m => m.SandboxPageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./pages/fruits/fruits.module').then(m => m.FruitsPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
