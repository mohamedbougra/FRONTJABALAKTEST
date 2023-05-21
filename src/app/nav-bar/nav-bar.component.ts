import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../_services/token-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ClientService } from '../_services/Client.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
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
