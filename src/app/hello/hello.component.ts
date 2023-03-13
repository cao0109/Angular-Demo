import {Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent { // 导出组件类 HelloComponent 以便在其它地方使用
  title = 'Hello World';
  logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  currentDateTime = new Date();
  isActive = true;
  isDisabled = false;
  items = ['Angular', 'React', 'Vue'];
  colors: Array<string> = ['red', 'green', 'blue'];
  // 构造函数 (constructor) 用于初始化类的属性
  constructor() { // 无参数的构造函数
  }

  onClick() {
    this.title = 'Hello Angular';
  }

  changeColor() {
    this.isActive = !this.isActive;
  }
}
