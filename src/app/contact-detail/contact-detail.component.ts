import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-contact-detail',
  template:`
    <p>{{name}}</p><p>{{phoneNumber}}</p>
  `,
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  name = '';
  phoneNumber = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      const id = param.get('id');
      this.name = param.get('name');
      this.phoneNumber = param.get('phoneNumber');
    })
  }
}
