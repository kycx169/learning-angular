import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lis-person",
  templateUrl: "./lis-person.component.html",
  styleUrls: ["./lis-person.component.css"]
})
export class LisPersonComponent implements OnInit {
  arrPeople = [
    { name: "Nam", age: 10 },
    { name: "Nu", age: 20 },
    { name: "Ninh", age: 30 }
  ];

  constructor() {}

  ngOnInit() {}
}
