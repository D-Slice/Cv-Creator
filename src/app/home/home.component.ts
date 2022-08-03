import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerForm : FormGroup = new FormGroup({
    email : new FormControl(null),
    password : new FormControl(null),
  })

  constructor() { }

  ngOnInit(): void {
  }

  registerD(rForm : FormGroup)
  {
    console.log(rForm.value)
  }

}
