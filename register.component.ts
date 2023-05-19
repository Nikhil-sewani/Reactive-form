import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'reactiveform';
  integreRegex = /^\d+$/;
  loginForm=new FormGroup({
    fname : new FormControl("", [Validators.required, Validators.maxLength(32)]),

    lname : new FormControl("", [Validators.required, Validators.maxLength(32)]),

    age : new FormControl("", [Validators.required, Validators.min(18), Validators.max(60), Validators.pattern(this.integreRegex)]),

    mobile : new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.integreRegex)]),

    email : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.email]),

    password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

    confirm_password : new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),

  })
  getControl(name:any){

    return this.loginForm.get(name)

  }

 

  registerFn(){

    console.log(this.loginForm.value)

  }
  }


