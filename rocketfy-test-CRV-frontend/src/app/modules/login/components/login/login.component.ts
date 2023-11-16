import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { IUser } from '../../models/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formData: FormGroup;

  constructor(private userService: UserService, private router: Router) {

    this.userService.cleanUser();

    this.formData = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });

  }

  public validateUser(): void {

    this.userService.validateUser({
      email: this.formData.get('email')?.value,
      password: this.formData.get('password')?.value
    })
    .subscribe((response: IUser) => {
      this.userService.registerUser(response);
      this.router.navigate(['/dashboard']);

    })

  }


  public get isFormInvalid() : boolean {
    console.log({isInvalid: !this.formData.valid})
    return !this.formData.valid;
  }


}
