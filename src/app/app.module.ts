import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { VirementDoneComponent } from './virement-done/virement-done.component';
import { VirementFormComponent } from './virement-form/virement-form.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClientNavMenuComponent } from './client-nav-menu/client-nav-menu.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { ClientLoginFormComponent } from './client-login-form/client-login-form.component';
import { ClientComponent } from './client/client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { HomeComponent } from './home/home.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { PaymentFactureComponent } from './payment-facture/payment-facture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RechargeFormComponent } from './recharge-form/recharge-form.component';
import { RechargeFormValiderComponent } from './recharge-form-valider/recharge-form-valider.component';

@NgModule({
  declarations: [
    AppComponent,
    VirementFormComponent,
    VirementDoneComponent,
    NavMenuComponent,
    HeaderComponent,
    ClientLoginFormComponent,
    ClientHomeComponent,
    CreateAccountFormComponent,
    PaymentFactureComponent,
    ChangePasswordComponent,
    ListFactureComponent,
    ProfileComponent,
    HomeComponent,
    NavBarComponent,
    ClientNavMenuComponent,
    ClientComponent,
    WelcomeComponent,
    RechargeComponent,
    RechargeFormComponent,
    RechargeFormValiderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
