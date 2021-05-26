import { Injectable } from "@angular/core";
import { ROLE_ADMIN } from "src/app/shared/constants/roles";
import { User } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!: User;

  constructor() {
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  isAdmin() {
    return this.user && (this.user.role === ROLE_ADMIN);
  }
}
