import { Login, User } from './../../_models/User';
//import { RegistrationService } from './../../_services/registration/registration.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authenticated = false;
  user = new Login();
  validMessage: string = '';

  constructor(
    // private _services: RegistrationService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  loginform: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(12),
      Validators.maxLength(40),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25),
    ]),
  });

  onSubmit() {
    if (this.loginform.valid) {
      const headers = {
        Authorization:
          'Basic ' + btoa(this.user.email + ':' + this.user.password),
      };
      return this.http
        .get('http://127.0.0.1:8080/login', {
          headers,
          responseType: 'text' as 'json',
        })
        .subscribe(
          (data) => {
            console.log(data);
            localStorage.setItem(
              'token',
              btoa(this.user.email + ':' + this.user.password)
            );
            this.router.navigateByUrl('');
          },
          (error: HttpErrorResponse) => {
            console.log(error.status);
            console.log(this.user.email + ':' + this.user.password);
            this.validMessage = 'Incorrect credentials entered';
          }
        );
    } else this.validMessage = 'Please enter valid credentials';
  }
  get Email() {
    return this.loginform.get('email');
  }

  get Password() {
    return this.loginform.get('password');
  }
}
