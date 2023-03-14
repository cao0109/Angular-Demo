import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root' //表示在根模块中提供该服务
})
export class ListService {

  constructor() {
  }

  list: Array<string> = ["Angular", "React", "Vue", "Node", "Java", "Python", "C++", "C#", "PHP", "JavaScript"];

  getList() {
    return this.list;
  }
}
