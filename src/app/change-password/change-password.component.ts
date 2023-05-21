import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePasswordRequestClient } from '../RequestEntities/ChangePasswordRequestClient';
import { ClientService } from '../_services/Client.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  numTel= window.sessionStorage.getItem("username");

  changePasswordRequestClient:ChangePasswordRequestClient={
   numTel:this.numTel,
   newPassword:"",
  }
  constructor(
    private router: Router,
    private clientService :ClientService,
    private tokenStorage:TokenStorageService
  ) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()==null){
      this.router.navigate(['/login']); 
    }else{
    
    }
  }


  changePasswordClicked(){
    this.clientService.ChangePassword(this.changePasswordRequestClient).subscribe({
      next: data => {
      
        this.router.navigate(['/clientHome/profile']);
      },
      error: err => {
        console.log(err);
      }
    }); 

  }
}
