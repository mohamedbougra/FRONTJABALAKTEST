import { ClientService } from './../_services/Client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from '../interfaces/JwtResponse';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-client-login-form',
  templateUrl: './client-login-form.component.html',
  styleUrls: ['./client-login-form.component.css']
})
export class ClientLoginFormComponent implements OnInit {

  client={
    logIn:"",
    password:"",
  }

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  jwtResponse:JwtResponse;
  constructor(
     private router: Router,
     private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private clientService: ClientService
     ) { }

  ngOnInit(): void {

    
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.router.navigate(['/clientHome/profile']);
      this.roles = this.tokenStorage.getClient().roles;

    }

  }

  submitClientLogInForm(form:any){

    const { logIn, password } = this.client;

    this.authService.login(logIn, password).subscribe({
      next: data => {


        console.log(data)
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveClient(data);
        window.sessionStorage.setItem("username", logIn);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getClient().roles;

        this.router.navigate(['/clientHome/openAccount']);
     
       
       
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
        this.isLoginFailed = true;
      }
     
    });
    
  }

      reloadPage(): void {
        window.location.reload();
      }
    }
 


