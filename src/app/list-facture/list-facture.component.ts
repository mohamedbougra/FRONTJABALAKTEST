import { PayerFactureRequest } from './../RequestEntities/PayerFactureRequest';
import { ListFactureRequest } from './../RequestEntities/ListFactureRequest';
import { Facture } from './../interfaces/Facture';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../_services/Client.service';
import { TokenStorageService } from '../_services/token-storage.service';

const numTelAccess = window.sessionStorage.getItem("username");
@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit {

  listFacture:Facture[];
  listFactureRequest:ListFactureRequest={
    ref:"",
    creancier:window.sessionStorage.getItem("creancier"),
    numTel:numTelAccess,
  }

  payerFactureRequest:PayerFactureRequest={
    ref:"",
    creancier:"",
    ownerphone:numTelAccess,
  

  }
  constructor( private router: Router, private location:Location,private clientService :ClientService,private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {

    if(this.tokenStorage.getToken()==null){
      this.router.navigate(['/login']); 
    }else{
      this.clientService.GetListfacture(this.listFactureRequest).subscribe({
        next: data => {
          console.log(data);
          this.listFacture=data;
         
          
        },
        error: err => {
          console.log("erreur while fetching list facture");
        }
      }); 
    }
   
  }
payerFactureClicked(ref:String){

  this.payerFactureRequest.ref=ref;
  
  this.clientService.payerFacture(this.payerFactureRequest).subscribe({
    next: data => {
      console.log(data);
    },
    error: err => {
      console.log(err);
    }
  }); 
}


  goBack(){
this.location.back();
  }
}
