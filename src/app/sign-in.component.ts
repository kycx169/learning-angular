import { Component } from '@angular/core';
import { SignInService } from './sign-in.service'

@Component({
    selector: 'app-sign-in',
    template: 
    `
        <form (submit)="onSubmit(formSignIn);" #formSignIn="ngForm" >
            <input placeholder="Email" ngModel #txtEmail="ngModel" name="email" required>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
                Email is required
            </p>
            <br><br>
            <div ngModelGroup="subject">
            <input type="password" placeholder="Password" ngModel name="password"><br><br>
            <label><input type="checkbox" [ngModel]="false" name="NodeJS" > NodeJS</label><br>
            <label><input type="checkbox" [ngModel]="false" name="Angular" > Angular</label><br>
            <label><input type="checkbox" [ngModel]="false" name="ReactJS" > ReactJS</label><br>
            </div>
            <button [disabled]="formSignIn.invalid">Submit</button>
        </form><br>
        <p>{{ formSignIn.value | json }}</p>
    `,
    providers:[SignInService],
})

export class SignInComponent {
    constructor(private signInService:SignInService) {}
    onSubmit(formSignIn) {
      this.signInService.sendPost(formSignIn.value)
      .then(result => console.log(result))
      .catch(err => console.log(err));
    }
}