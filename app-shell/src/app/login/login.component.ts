import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = 'user';
  password = 'user';
  constructor(
    private readonly appService: AppService,
    private readonly router: Router,
    private readonly _snackBar: MatSnackBar
  ) {}

  login() {
    const success = this.appService.login(this.username, this.password);
    if (success) {
      this.router.navigate(['/main']);
    } else {
      this._snackBar.open('Login failed', 'Close');
    }
  }
}
