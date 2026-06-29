import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './const/validatorsPatterns';
import { EmailIdValidator } from './validators/emailValidaor';
import { PasswordValidator } from './validators/passwordMatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Reactive_User_reg_form';
  registrationForm !: FormGroup;

  ngOnInit(): void {
    this.createRegistrationForm()
    this.f['password'].valueChanges.subscribe(val => {
      if (this.f['password'].valid) {
        this.f['confirmPassword'].enable()
      } else {
        this.f['confirmPassword'].disable()
      }
    })
  }

  createRegistrationForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.phone)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)], [EmailIdValidator.isEmailIdExist]),
      password: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.password)]),
      confirmPassword: new FormControl({value: null, disabled: true},[Validators.required, PasswordValidator.passwordMatch]),
      bio: new FormControl(null, Validators.maxLength(200)),
      website: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.url)])
    })
  }

  get f() {
    return this.registrationForm.controls
  }

  onRegister() {
    console.log(this.registrationForm);
  }

}
