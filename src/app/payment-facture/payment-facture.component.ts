import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-payment-facture',
  templateUrl: './payment-facture.component.html',
  styleUrls: ['./payment-facture.component.css'],
})
export class PaymentFactureComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}
  produits = [
    {
      name: 'INWI FACTURES',
      description: 'TELEPHONIE ET INTERNET',
      image: './assets/images/inwi.png',
      type: 'recharge',
      Username: 'IAMFACTURES',
    },
    {
      name: 'IAM FACTURES',
      description: 'TELEPHONIE ET INTERNET',
      image: './assets/images/logo_iam.png',
      type: 'recharge',
      Username: 'IAMFACTURES',
    },
    {
      name: 'ORANGE FACTURES',
      description: 'TELEPHONIE ET INTERNET',
      image: './assets/images/orange.png',
      type: 'recharge',
      Username: 'IAMFACTURES',
    },
    {
      name: 'REDAL',
      description: 'FACTURE REDAL',
      image: './assets/images/redal.png',
      type: 'facture',
      Username: 'REDAL',
    },

    {
      name: 'AMENDIS TANGER',
      description: 'FACTURES AMENDIS TANGER',
      image: './assets/images/Amendis.png',
      type: 'facture',
      Username: 'AMANDISTANGER',
    },
    {
      name: 'LYDEC',
      description: 'FACTURE LYDEC',
      image: './assets/images/lydec.png',
      type: 'facture',
      Username: 'LYDEC',
    },
  ];
  ngOnInit(): void {
    if (this.tokenStorage.getToken() == null) {
      this.router.navigate(['/login']);
    } else {
      return null;
    }
  }

  checkAvailableBill(creancier: string) {
    window.sessionStorage.setItem('creancier', creancier);
    this.router.navigate(['clientHome/listFacture']);
    console.log('clicked');
  }
}
