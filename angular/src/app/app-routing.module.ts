import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TsxRendererComponent } from './tsx-renderer/tsx-renderer.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'tsx' },
    { path: 'tsx', component: TsxRendererComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
