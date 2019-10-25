import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
     path: '', loadChildren: './login/login.module#LoginPageModule' },  { path: 'cadastrar', loadChildren: './cadastrar/cadastrar.module#CadastrarPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
