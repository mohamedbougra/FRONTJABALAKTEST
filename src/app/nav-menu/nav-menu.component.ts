import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ClientService } from '../_services/Client.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  doesHaveaccount: Boolean = false;

  isLoggedIn: Boolean = false;
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private clientService: ClientService
  ) {}

  numTel = window.sessionStorage.getItem('username');

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorage.getToken() != null;

    this.clientService.getClientAccountExists(this.numTel).subscribe({
      next: (data) => {
        this.doesHaveaccount = data;
      },
      error: (err) => {},
    });
  }

  onLogout() {
    this.router.navigate(['/']);
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
