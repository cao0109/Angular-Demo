import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() name!: string; // 加！表示必须传入
  ngOnInit(): void {
    console.log(this.name);
  }

  @Output() addList = new EventEmitter() // 事件发射器

  pushList(value: string) {
    console.log(value);
    this.addList.emit(value);
  }
}
