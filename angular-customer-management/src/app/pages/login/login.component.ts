import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email!: string;
  password!:string;
  constructor() { }

  ngOnInit(): void {
  }
  login(emailInput:any){
    console.log(emailInput);

  }
}
