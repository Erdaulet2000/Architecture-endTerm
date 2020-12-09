import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    useremail: new FormControl(),
    password: new FormControl(),
    address: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
