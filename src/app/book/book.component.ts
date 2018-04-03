import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  name = "";
  english = "";
  vietnamese ="";
  isShowForm = false;
  filterStatus = "XEM_TAT_CA";
  constructor() {}
  arrWords = [
    { id: 1, en: "action", vn: "hành động", memorized: true },
    { id: 2, en: "actor", vn: "diễn viên", memorized: false },
    { id: 3, en: "activity", vn: "hoạt động", memorized: true },
    { id: 4, en: "active", vn: "chủ động", memorized: true },
    { id: 5, en: "bath", vn: "tắm", memorized: false },
    { id: 6, en: "bedroom", vn: "phòng ngủ", memorized: true }
  ];

  addWord() {
    this.arrWords.unshift({ id: this.arrWords.length + 1, en: this.english, vn: this.vietnamese, memorized: false },);
    this.english = "";
    this.vietnamese = "";
    this.isShowForm = false;
  }

  removeWord (id:number) {
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index,1);
  }

  getShowStatus(memorized: boolean) {
    const dkXemtatca = this.filterStatus === "XEM_TAT_CA";
    const dkXemdanho = this.filterStatus === "XEM_DA_NHO" && memorized;
    const dkXemchuanho = this.filterStatus === "XEM_CHUA_NHO" && !memorized;
    return dkXemtatca || dkXemdanho || dkXemchuanho;
  }

  evenStyle = {
    color: "red",
    fontSize: "20px"
  };

  oddStyle = {
    color: "blue",
    fontSize: "40px"
  };
  isHighLight = false;

  currentClass = { circle: this.isHighLight, square: !this.isHighLight };

  isShow = true;

  arrSubject = ["Toan", "Van", "Anh"];

  ngOnInit() {}
}
