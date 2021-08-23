import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_models/User';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  private API_URL = environment.API_URL;
  user = new User();
  validMessage: string = '';

  constructor(private HttpClient: HttpClient, private router: Router) {}

  ngOnInit() {}

  signinform: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
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
    if (this.signinform.valid) {
      this.HttpClient.post<any>(
        this.API_URL + '/api/v1/registration',
        this.user
      ).subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
      this.router.navigateByUrl('/signin/confirm');
      return true;
    } else {
      this.validMessage = 'Please enter all valid fields';
    }
  }

  get FirstName() {
    return this.signinform.get('firstName');
  }
  get LastName() {
    return this.signinform.get('lastName');
  }

  get Email() {
    return this.signinform.get('email');
  }

  get Password() {
    return this.signinform.get('password');
  }
}
