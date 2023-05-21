import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-nav-menu',
  templateUrl: './client-nav-menu.component.html',
  styleUrls: ['./client-nav-menu.component.css'],
})
export class ClientNavMenuComponent implements OnInit {
  doesHaveaccount: Boolean = false;

  isLoggedIn: Boolean = false;
  constructor(private router: Router) {}

  numTel = window.sessionStorage.getItem('username');

  ngOnInit(): void {}

  onLogout() {
    this.router.navigate(['/']);
    window.location.reload();
  }
}
