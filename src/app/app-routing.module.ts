import { PaymentFactureComponent } from './payment-facture/payment-facture.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { HomeComponent } from './home/home.component';
import { VirementFormComponent } from './virement-form/virement-form.component';
import { VirementDoneComponent } from './virement-done/virement-done.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';
import { RechargeFormValiderComponent } from './recharge-form-valider/recharge-form-valider.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: ClientLoginFormComponent },
  {
    path: 'clientHome',
    component: ClientHomeComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'livraison', component: VirementFormComponent },
      { path: 'livraison/success', component: VirementDoneComponent },
      { path: 'openAccount', component: CreateAccountFormComponent },
      { path: 'facture', component: PaymentFactureComponent },
      { path: 'changePassword', component: ChangePasswordComponent },
      { path: 'listFacture', component: ListFactureComponent },
      { path: 'recharge', component: RechargeComponent },
      {
        path: 'recharge/form/valider',
        component: RechargeFormValiderComponent,
      },
      {
        path: 'recharge/form',
        component: RechargeFormComponent,
      },
      { path: 'welcome', component: WelcomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
