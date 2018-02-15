import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example2Component } from './example-2/example-2.component';
import { SignUpComponent } from './example-2/forms/sign-up/sign-up.component';
import { SignInComponent } from './example-2/forms/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'example-2', pathMatch: 'full' },
  {
    path: 'example-2',
    component: Example2Component,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-in', component: SignInComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
