import { CanActivate } from "@angular/router";

export class LoginAuthGuard implements CanActivate {
    isLoggedIn = false;
    constructor() {}
  
    canActivate() {
      console.log("OnlyLoggedInUsers");
      if (this.isLoggedIn) {
        return true;
      } else {
        window.alert("You don't have permission to view this page");
        return false;
      }
    }
  }