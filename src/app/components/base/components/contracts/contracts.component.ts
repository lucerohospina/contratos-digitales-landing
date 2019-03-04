import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  flag: boolean = false;
  flag2: boolean = false;
  flag3: boolean = false;
  flag4: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDescription() {
    this.flag = !this.flag;
  }
  showDescription2() {
    this.flag2 = !this.flag2;
  }
  showDescription3() {
    this.flag3 = !this.flag3;
  }
  showDescription4() {
    this.flag4 = !this.flag4;
  }

}
