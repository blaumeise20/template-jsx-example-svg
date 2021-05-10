import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSideRendererComponent } from './client-side-renderer/client-side-renderer.component';
import { ServerSideRendererComponent } from './server-side-renderer/server-side-renderer.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'client' },
    { path: 'client', component: ClientSideRendererComponent },
    { path: 'server', component: ServerSideRendererComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
