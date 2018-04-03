import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';
// @Component({
//     selector: 'app-parent',
//     template: `
//     <h3>{{ value }}</h3>
//     <app-child (myClick) = "changeValue($event);"></app-child>
//     `
// })

@Component({
    selector: 'app-parent',
    template: `
    <button (click)="onAddForChild();">Add for child</button>
    <app-child></app-child>
    `
})

export class ParentComponent {
    // value = 0;

    // changeValue(isAdd: boolean){
    //     isAdd ? (this.value = this.value + 1) : (this.value = this.value - 1);
    // }

    @ViewChild(ChildComponent)
    myChild: ChildComponent;

    onAddForChild() {
        this.myChild.value++;
    }
}