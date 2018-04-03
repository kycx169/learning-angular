import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-sign-up',
    template: 
    `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
            <input placeholder="Email" formControlName="email">
            <br><br>
            <input type="password" placeholder="Password" formControlName="password"><br><br>
            <div formGroupName="subject">
                <label><input type="checkbox" name="NodeJS" formControlName="nodeJS"> NodeJS</label><br>
                <label><input type="checkbox" name="AngularJS" formControlName="angularJS"> Angular</label><br>
                <label><input type="checkbox" name="ReactJS" formControlName="reactJS"> ReactJS</label><br>
            </div>
            <button [disabled]="formSignUp.invalid">Submit</button>
        </form><br>
    `,
})

export class SignUpComponent implements OnInit{
 
    formSignUp: FormGroup;
    
    constructor(private fb:FormBuilder) {
        // this.formSignUp = new FormGroup({
        //     email: new FormControl(),
        //     password: new FormControl(),
        //     subject: new FormGroup({
        //         nodeJS: new FormControl(),
        //         angularJS: new FormControl(),
        //         reactJS: new FormControl(),
        //     })
        // });
    }

    ngOnInit(): void {
        this.formSignUp = this.fb.group({
            email:['',Validators.required],
            password:'',
            subject: this.fb.group({
                nodeJS: false,
                angularJS: false,
                reactJS: false,
            })
        });
    }

    onSubmit() {
        console.log(this.formSignUp.value);
    }
}

function gmailValidator(formControl:FormControl) {
    if(formControl.value.include('@gmail.com')) {
        return null;
    }
    return {gmail: true}; 
}