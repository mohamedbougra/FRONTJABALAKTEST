import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recharge-form-valider',
  templateUrl: './recharge-form-valider.component.html',
  styleUrls: ['./recharge-form-valider.component.css'],
})
export class RechargeFormValiderComponent implements OnInit {
  title = 'Paiment de facture';
  title1 = 'Paiement par reference';
  title2 = 'Selectioner pour payer';
  image = '../assets/images/Logo_inwi.png';
  imageTitle = 'PAIMENT DE FACTURES  RECHARGES';
  Creancier = 'Creancier';
  Creance = 'Creance';
  Donnateur = 'Donnateur';
  soutitle1 = 'ALCS';
  soutitle2 = 'SIDACTION';
  soutitle3 = 'ANAS';
  value: number = 0;
  img: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.img = this.router.getCurrentNavigation().extras.state.img;
      }
    });
  }

  ngOnInit() {
    const dataString = window.sessionStorage.getItem('data');
    if (dataString) {
      const data = JSON.parse(dataString);
      this.image = data.img;
      this.value = data.pass;
    }
  }
  goToRecharge() {
    this.router.navigate(['clientHome/recharge']);
  }
}
