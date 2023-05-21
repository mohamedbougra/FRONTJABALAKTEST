import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "../_services/token-storage.service";

@Component({
    selector:"app-virement-done",
    templateUrl:'./virement-done.component.html'
})

 export class VirementDoneComponent{

    constructor(private router: Router, private tokenStorage:TokenStorageService) {}
    ngOnInit(): void {
  
        if(this.tokenStorage.getToken()==null){
          this.router.navigate(['/login']); 
        }else{
         return null;
        }
      }
}