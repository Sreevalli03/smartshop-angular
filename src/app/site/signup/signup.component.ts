import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { User } from 'src/app/User';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  option = ["Male", "Female"];
  signUpForm: FormGroup;

  constructor(private router: Router, private authService: AuthServiceService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authService.type = this.route.snapshot.paramMap.get('type');
    this.signUpForm = this.formBuilder.group({
      userId: ['', [
        Validators.required,
        this.isUsernameTaken
      ]],
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      lastName: ['', [
        Validators.required
      ]],
      age: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      contactNumber: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      password: ['', [
        Validators.required
      ]],
      confirmPassword: ['', [
        Validators.required,
        this.matchConfirmPassword.bind(this)
      ]]
    })
  }
  get userId() {
    return this.signUpForm.get('userId');
  }
  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get age() {
    return this.signUpForm.get('age');
  }
  get gender() {
    return this.signUpForm.get('gender');
  }
  get contactNumber() {
    return this.signUpForm.get('contactNumber');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }
  matchConfirmPassword(formControl: FormControl): { [s: string]: boolean } {
    if (this.signUpForm) {
      if (formControl.value && formControl.value.length > 0 && formControl.value !== this.signUpForm.get('password').value) {
        return { 'nomatch': true };
      }
    }
    return null;
  }
  isUsernameTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
      return { 'userNameTaken': true };
    } else {
      return null;
    }
  }

  addUser(users: User) {
    console.log(users);
    this.authService.addUser(users).subscribe(
      data => {
        if (data) {
          alert('Your details are submitted successfully');
          console.log("logged");
          this.router.navigate(['login'])
        }
        else {
          this.router.navigate(['signup'])
        }
      });
  }
}

