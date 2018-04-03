// import { Component, Output, EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

// @Component({
//     selector:'<app-child></app-child>',
//     template:`
//     <button (click)="addFormParent();">Add</button><button (click)="subFormParent();">Sub</button>
//     `
// })

@Component({
    selector:'<app-child></app-child>',
    template:`
    <h3>{{ value }}</h3>
    `
})

export class ChildComponent {
    // @Output() myClick = new EventEmitter<boolean>();

    // addFormParent() {
    //     this.myClick.emit(true);
    // }

    // subFormParent() {
    //     this.myClick.emit(false);
    // }
    value = 0;

}