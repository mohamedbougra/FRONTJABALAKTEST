import { Facture } from './../interfaces/Facture';
import { VirementRequest } from './../RequestEntities/VirementRequest';
import { ChangePasswordRequestClient } from './../RequestEntities/ChangePasswordRequestClient';
import { CreatebankAccountClientRequest } from './../RequestEntities/CreateBankAccountClientRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListFactureRequest } from '../RequestEntities/ListFactureRequest';
import { PayerFactureRequest } from '../RequestEntities/PayerFactureRequest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  private clientUrlVirement: string;
  private clientUrlFacture: string;

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/api/auth/';
    this.clientUrlFacture = 'http://localhost:8080/facture/';
    this.clientUrlVirement = 'http://localhost:8080/virement/';
  }

  public getClientAccount(username: string) {
    return this.http.get(this.clientUrl + '/getClientAccount');
  }

  public getClientAccountExists(numTel: String): Observable<Boolean> {
    return this.http.post<any>(
      this.clientUrl + 'accountExists',

      numTel,
      httpOptions
    );
  }

  public getClientHasFirstAuth(numTel: String): Observable<Boolean> {
    return this.http.post<any>(
      this.clientUrl + 'changePassword',

      numTel,
      httpOptions
    );
  }

  public createbankAccount(
    createbankAccountClientRequest: CreatebankAccountClientRequest
  ) {
    return this.http.post(
      this.clientUrl + 'createbankAccount',
      createbankAccountClientRequest,
      { responseType: 'text' }
    );
  }

  public ChangePassword(
    changePasswordRequestClient: ChangePasswordRequestClient
  ) {
    return this.http.post(
      this.clientUrl + 'client/changePassword',
      changePasswordRequestClient,
      { responseType: 'text' }
    );
  }

  public GetListfacture(
    listFactureRequest: ListFactureRequest
  ): Observable<any[]> {
    return this.http.get<any[]>(
      this.clientUrlFacture +
        `listFacturecreancier/${listFactureRequest.creancier}/${listFactureRequest.numTel}`,
      httpOptions
    );
  }

  public payerFacture(payerFactureRequest: PayerFactureRequest) {
    return this.http.post(
      this.clientUrlFacture + 'payerFacture',
      payerFactureRequest,
      httpOptions
    );
  }

  public getClient(numTel: string) {
    return this.http.post<any>(
      this.clientUrl + 'getClient',
      numTel,
      httpOptions
    );
  }

  public effectuerVirement(
    virementRequest: VirementRequest
  ): Observable<Boolean> {
    return this.http.post<any>(
      this.clientUrlVirement + 'effectuerVirement',
      virementRequest,
      httpOptions
    );
  }
}
