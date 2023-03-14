import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  list: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  addListFun(num: string) {
    this.list.push(num);
  }

  @ViewChild('myChild') child: any;
  ngOnInit(): void { }

  getChild(e:any) {
    console.log(this.child);
  }

  addFunc() {
    this.child.pushList('11');
  }
}
