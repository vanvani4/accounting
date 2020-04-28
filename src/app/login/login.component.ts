import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Поле не може бути порожнім';
    }

    return this.email.hasError('email') ? 'Невірна адреса' : '';
  }

  getErrorPassword() {
    if (this.password.hasError('required')) {
      return 'Поле не може бути порожнім';
    }

    return this.password.hasError('minlength') ? 'Мінімальний пароль 6 знаків' : '';
  }
}
