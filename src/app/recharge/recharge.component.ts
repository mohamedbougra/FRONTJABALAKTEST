import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css'],
})
export class RechargeComponent implements OnInit {
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}
  produits = [
    {
      name: 'INWI RECHARGE',
      description: 'TELEPHONIE ET INTERNET',
      image: './assets/images/inwi.png',
      type: 'recharge',
      Username: 'IAMFACTURES',
    },
    {
      name: 'IAM RECHARGE',
      description: 'TELEPHONIE ET INTERNET',
      image: './assets/images/maroc-telecom-r.jpg',
      type: 'recharge',
      Username: 'IAMFACTURES',
    },
    {
      name: 'ORANGE RECHARGE',
      description: 'TELEPHONIE ET INTERNET',
      image: './assets/images/orange.png',
      type: 'recharge',
      Username: 'IAMFACTURES',
    },
  ];
  ngOnInit(): void {
    if (this.tokenStorage.getToken() == null) {
      this.router.navigate(['/login']);
    } else {
      return null;
    }
  }
  checkAvailableBill(creancier: string, img: string) {
    window.sessionStorage.setItem('creancier', creancier);
    const navigationExtras: NavigationExtras = {
      state: {
        img: img,
      },
    };
    this.router.navigate(['clientHome/recharge/form'], navigationExtras);
    console.log('clicked');
  }
}
