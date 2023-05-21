import { Compte } from "./Compte";

export class Client {

        id_user: number;
        username:String;
        nom:String;
        prenom: String;
        numTel: String;
        email:String;
        password: String;
        firstAuth: Boolean;
        compte: Compte;
        role: String;
}