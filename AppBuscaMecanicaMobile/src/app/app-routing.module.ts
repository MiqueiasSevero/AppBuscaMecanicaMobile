import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastrar', loadChildren: './cadastrar/cadastrar.module#CadastrarPageModule' },
  { path: 'tabs' , loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: '', loadChildren:'./perfil/perfil.module#PerfilPageModule'},
  { path: 'historico-servicos', loadChildren: './historico-servicos/historico-servicos.module#HistoricoServicosPageModule' },
  { path: 'servico', loadChildren: './servico/servico.module#ServicoPageModule' },  { path: 'descricao-servico', loadChildren: './descricao-servico/descricao-servico.module#DescricaoServicoPageModule' },
  { path: 'confirmar-agendamento', loadChildren: './confirmar-agendamento/confirmar-agendamento.module#ConfirmarAgendamentoPageModule' }


 
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
