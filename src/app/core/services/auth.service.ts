import { Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";

const TOKEN_KEY = 'token';
const EXPIRATION_DATE_TOKEN = 'expirationDate';
const HOUR_DELAY = 3600000;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;
  token: string;

  constructor(private router: Router,
    //private categoryService: CategoryDataService,
    //private httpService: HttpService,
    //private zone: NgZone,
    //private userServiceMessage: UserMessageChannelService
    )
  {
    this.isAuth = false;
  }

}
