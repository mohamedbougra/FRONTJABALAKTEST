import { VirementRequest } from './../RequestEntities/VirementRequest';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { ClientService } from '../_services/Client.service';

@Component({
  selector: 'app-virement-form',
  templateUrl: './virement-form.component.html',
  styleUrls: ['./virement-form.component.css'],
})
export class VirementFormComponent {
  virementRequest: VirementRequest = {
    montant: 0.0,
    ribDest: '',
    ribSrc: window.sessionStorage.getItem('rib'),
  };

  showNotEnoughCredit: boolean = false;
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private clientService: ClientService
  ) {}
  ngOnInit(): void {
    if (this.tokenStorage.getToken() == null) {
      this.router.navigate(['/login']);
    } else {
      return null;
    }
  }

  effectuerVirementClicked() {
    this.clientService.effectuerVirement(this.virementRequest).subscribe({
      next: (data) => {
        console.log(data);

        if (data == true) {
          this.router.navigate(['clientHome/livraison/success']);
        } else if (data == false) {
          this.showNotEnoughCredit = true;
        }
      },
      error: (err) => {
        console.log('erreur while sending wire transfert');
      },
    });
  }
}
