import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './jogos/jogos.component';   // Importação do componente Jogos
import { ConsolesComponent } from './consoles/consoles.component'; // Importação do componente Consoles

// Definindo as rotas para jogos e consoles
export const routes: Routes = [
  { path: '', component: JogosComponent },   // Rota principal direcionando para Jogos
  { path: 'jogos', component: JogosComponent },   // Rota para exibir os jogos
  { path: 'consoles', component: ConsolesComponent }  // Rota para exibir os consoles
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configurando as rotas no módulo
  exports: [RouterModule]
})
export class AppRoutingModule { }
