import {Component} from '@angular/core';
import {FormControl, FormGroup, NgModel, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
})
export class ProfileEditorComponent {
  loginForm = new FormGroup({
    username: new FormControl('admin', Validators.required),
    password: new FormControl('123456', Validators.required),
  });

  formData = {
    name: '',
    password: ''
  }

  constructor(
    private fb: FormBuilder
  ) {
  }

  validateForm = this.fb.group({
    username: [null, [Validators.required], Validators.maxLength(18), Validators.minLength(6)],
    password: [null, [Validators.required, this.passwordValidator]],
    phone: [null, [Validators.required, this.phoneValidator]],
  });

  submit() {
    console.log(this.loginForm.value);
  }

  sub(name: NgModel) {
    console.log(name);
  }

  private passwordValidator() {
    return (password: FormControl) => {
      const value = password.value || '';
      if (value === null) {
        return {msg: '密码不能为空'}
      }
      const valid = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
      return valid ? null : {msg: '密码必须包含大小写字母和数字，且长度不小于8位'};
    };
  }

  private phoneValidator() {
    return (phone: FormControl) => {
      const value = phone.value || '';
      if (value === null) {
        return {msg: '手机号不能为空'}
      }
      const valid = value.match(/^1[3456789]\d{9}$/);
      return valid ? null : {msg: '手机号格式不正确'};
    };
  }

  sub2() {
    console.log(this.validateForm.value);
  }
}
