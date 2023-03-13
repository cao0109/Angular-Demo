# Angular Notes

## 1. 什么是Angular

Angular是一个开源的前端框架，由Google开发，用于构建web应用。
基于TypeScript，Angular提供了一套完整的开发框架，包括模块化、组件化、数据绑定、路由、依赖注入、服务、指令、模板、表单、动画等。
> Angular1.x是基于JavaScript的，Angular2.x是基于TypeScript的。

## 2. Angular开发环境

### 2.1 安装Node.js

Angular是基于Node.js的，所以需要先安装Node.js。

### 2.2 安装Angular CLI

Angular CLI是Angular的命令行工具，用于创建、构建、测试、部署Angular应用。

```bash
npm install -g @angular/cli
```

### 2.3 创建Angular应用

```bash
ng new my-app
```

### 2.4 启动Angular应用

```bash
cd my-app
ng serve --open
```

## 3. Angular应用结构

### 3.1 src目录

src目录是Angular应用的源代码目录，包含了Angular应用的所有代码。

### 3.2 app目录

app目录是Angular应用的主要代码目录，包含了Angular应用的所有组件、模块、服务、路由等。

### 3.3 app.module.ts

app.module.ts是Angular应用的主模块，所有的组件、服务、路由等都需要在app.module.ts中注册。

### 3.4 app.component.ts

app.component.ts是Angular应用的根组件，所有的组件都是根组件的子组件。

> 模块与组件的关系类似于类与对象的关系，模块是组件的容器，组件是模块的成员。

### 3.5 app.component.html

app.component.html是Angular应用的根组件的模板，所有的组件都是根组件的子组件。

### 3.6 app.component.scss

app.component.scss是Angular应用的根组件的样式，所有的组件都是根组件的子组件。

## 4. Angular模块

### 4.1 模块的概念

模块是Angular应用的基本构建块，是Angular应用的容器，用于组织Angular应用的代码。
> 一个模块包括：
> - 组件(Components)
> - 指令(Directives)
> - 管道(Pipes)
> - 服务(Services)
> - 其他模块(Imported Modules)
> - 依赖注入(Dependency Injection)
> - 元数据(Metadata)
> - 装饰器(Decorators)
> - 路由(Routes)
> - 模板(Templates)
> - 样式(Styles)
> - 数据绑定(Data Binding)
> - 事件绑定(Event Binding)
> - 生命周期钩子(Lifecycle Hooks)
> - 输入输出属性(Inputs and Outputs)
> - ...

### 4.2 模块的分类

Angular提供了两种模块：

- 根模块
- 特性模块

### 4.2.1 根模块

根模块是Angular应用的主模块，所有的组件、服务、路由等都需要在根模块中注册。

### 4.2.2 特性模块

特性模块是根模块的子模块，用于组织根模块的代码。
> 一个特性模块包括：
> - 组件(Components)
> - 指令(Directives)
> - 管道(Pipes)
> - 服务(Services)
> - 其他模块(Imported Modules)
> - ...

### 4.3 模块的创建

```bash
ng generate module my-module
```

或者

```bash
ng g m my-module
```

## 5. Angular组件

### 5.1 组件的概念

组件是Angular应用的基本构建块，是Angular应用的视图，用于显示数据;
组件是模块的成员，用于组织模块的代码。

### 5.2 组件的创建

```bash
ng generate component my-component
```

或者

```bash
ng g c my-component
```

使用Angular CLI命令创建组件时，会自动在app.module.ts中注册组件。
如果不使用Angular CLI命令创建组件，则需要在app.module.ts中手动注册组件。

```typescript
import {MyComponent} from './my-component/my-component.component';

@NgModule({
  declarations: [
    MyComponent
  ],
  ...
})
```

**@Component最常用的几个选项:**

- selector: 组件的选择器，用于在模板中匹配HTML元素的名称，以创建此组件。
- templateUrl: 组件模板文件的位置。
- template: 组件模板内容。
- styleUrls: 组件样式文件的位置。
- styles: 组件样式内容。
- providers: 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
- animations: 组件的动画设置。
- ...

### 5.3 组件的生命周期

| 钩子方法                      | 用途                                                                                                 | 时机                                                                                                   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| `ngOnChanges()`           | 当 Angular 设置或重新设置数据绑定的输入属性时响应。 该方法接受当前和上一属性值的 `SimpleChanges` 对象注意，这发生的非常频繁，所以你在这里执行的任何操作都会显著影响性能。 | 在 `ngOnInit()` 之前以及所绑定的一个或多个输入属性的值发生变化时都会调用。注意，如果你的组件没有输入，或者你使用它时没有提供任何输入，那么框架就不会调用 `ngOnChanges()`。 |
| `ngOnInit()`              | 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。                                                       | 在第一轮 `ngOnChanges()` 完成之后调用，只调用**一次**。                                                               |
| `ngDoCheck()`             | 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。                                                                | 紧跟在每次执行变更检测时的 `ngOnChanges()` 和 首次执行变更检测时的 `ngOnInit()` 后调用。                                         |
| `ngAfterContentInit()`    | 当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用。                                                                | 第一次 `ngDoCheck()` 之后调用，只调用一次。                                                                        |
| `ngAfterContentChecked()` | 每当 Angular 检查完被投影到组件或指令中的内容之后调用                                                                    | `ngAfterContentInit()` 和每次 `ngDoCheck()` 之后调用                                                        |
| `ngAfterViewInit()`       | 当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用                                                               | 第一次 `ngAfterContentChecked()` 之后调用，只调用一次。                                                            |
| `ngAfterViewChecked()`    | 每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用。                                                           | `ngAfterViewInit()` 和每次 `ngAfterContentChecked()` 之后调用。                                              |
| `ngOnDestroy()`           | 每当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏                                            | 在 Angular 销毁指令或组件之前立即调用。                                                                             |

### 5.4 组件的通信

- 父组件向子组件传递数据

```html

<app-child [name]="parentName"></app-child>
```

```ts
export class ParentComponent {
  parentName = 'parent';
}
```

```ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>child: {{name}}</p>`
})
export class ChildComponent {
  @Input() name: string;
}
```

- 子组件向父组件传递数据

```html
<app-child (nameChange)="onNameChange($event)"></app-child>
```

```ts
export class ParentComponent {
  onNameChange(name: string) {
    console.log(name);
  }
}
```

```ts
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <input type="text" (input)="onInput($event)">
  `
})
export class ChildComponent {
  @Output() nameChange = new EventEmitter<string>();

  onInput(event: any) {
    this.nameChange.emit(event.target.value); // 向父组件传递数据
  }
}
```

- 父组件与子组件通信



## 6. Angular模板

### 6.1 插值表达式

插值表达式是一种快速的在模板中插入组件属性值的方式。

```html
<h1>{{title}}</h1>
```

```ts
export class AppComponent {
  title = 'Angular';
}

``
```

### 6.2 属性绑定

- 属性绑定用于将组件属性值绑定到模板元素的属性上。

```html
<img [src]="logoUrl" alt="123">
```

```ts
export class AppComponent {
  logoUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
}
```

- 类绑定

```html

<button [class]="isActive ? 'active' : ''">Click Me</button> <!-- 使用三元表达式 -->
<button [class.active]="isActive">Click Me</button> <!-- 单一类绑定 -->
<button [ngClass]="{active: isActive, disabled: isDisabled}">Click Me</button> <!-- 使用ngClass指令 与上面的效果一样 -->
<h3 [class]="['active', 'disabled']">Hello Angular</h3> <!-- 多个类绑定 -->
```

```ts
  export class AppComponent {
  isActive = true;
  isDisabled = false;
}
```

- 样式绑定

```html

<button [style.color]="isActive ? 'red' : 'green'">Click Me</button> <!-- 使用三元表达式 -->
<button [style.color]="isActive ? 'red' : 'green'" [style.font-size.px]="isActive ? 20 : 12">Click Me
</button> <!-- 多个样式绑定 -->
<button [ngStyle]="{color: isActive ? 'red' : 'green', 'font-size.px': isActive ? 20 : 12}">Click Me
</button> <!-- 使用ngStyle指令 -->
```

```ts
export class AppComponent {
  isActive = true;
}
```

### 6.3 事件绑定

事件绑定用于将DOM事件绑定到组件的事件处理器上。

```html

<button (click)="onClick()">Click Me</button>
```

```ts
export class AppComponent {
  onClick() {
    this.title = 'Hello Angular';
  }
}
```

### 6.4 双向绑定

双向绑定用于将组件属性值绑定到模板元素的属性上，并将DOM事件绑定到组件的事件处理器上。
ngModel 指令只对表单元素有效，所以要在模块中导入 FormsModule。

```ts
import {FormsModule} from '@angular/forms';

@NgModule({
  ..., // 其他配置
  imports: [
    FormsModule
  ],
  ...// 其他配置
})
```

```html
<input [(ngModel)]="title">
```

```ts
export class HelloComponent {
  title = 'Angular';
}
```

> [( )] 语法是 Angular 的双向绑定语法，用于将组件属性值绑定到模板元素的属性上，并将DOM事件绑定到组件的事件处理器上。
> [(ngModel)] 与 [ngModel] 的区别是: [(ngModel)] 会自动更新组件的属性值，而 [ngModel] 不会。
> eg: [(ngModel)]="title" 会自动更新 title 的值，而 [ngModel]="title" 不会。

### 6.5 管道

管道用于将组件属性值转换为指定格式。

```html
<h2>{{title | uppercase}}</h2>
<h3>{{title | uppercase | lowercase}}</h3>
```

```ts
export class AppComponent {
  title = 'Angular';
}
```

* 管道可以串联使用，如上例所示。
* 管道可以接受参数，如下例所示。

```html
<h2>{{title | slice:0:3}}</h2> <!-- 截取字符串 -->
```

```ts
export class AppComponent {
  title = 'Angular';
}
```

```text
结果为：Ang
```

* 常用管道
  * slice: 截取字符串
  * date: 格式化日期
  * currency: 格式化货币
  * number: 格式化数字
  * uppercase: 转换为大写
  * lowercase: 转换为小写
  * json: 转换为JSON字符串
  * ...
  * 自定义管道

**自定义管道**

```ts
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
```

> 使用脚手架创建管道
> ng g pipe my-pipe

### 6.6 模板引用变量

模板引用变量用于获取模板元素的引用。

```html
<input #inputRef type="text">
<button (click)="onClick(inputRef.value)">Click Me</button>
```

```ts
export class AppComponent {
  onClick(value) {
    console.log(value);
  }
}
```

Angular 会根据声明的变量的位置给模板变量赋值：

* 如果模板变量声明在模板元素上，Angular 会将模板元素的引用赋值给模板变量。
  ```html
  <input #inputRef type="text">
  <button (click)="onClick(inputRef.value)">Click Me</button>
  ```
* 如果模板变量声明在指令上，Angular 会将指令的引用赋值给模板变量。
  ```html
  <input [(ngModel)]="title" #inputRef>
  <button (click)="onClick(inputRef.value)">Click Me</button>
  ```
* 如果模板变量声明在组件上，Angular 会将组件的引用赋值给模板变量。
  ```html
  <app-child #childRef></app-child>
  <button (click)="onClick(childRef.title)">Click Me</button>
  ```
* 如果模板变量声明在[ng-template]上，Angular 会将模板的引用赋值给模板变量。
  ```html
  <ng-template #templateRef>
    <h2>Hello Angular</h2>
  </ng-template>
  <button (click)="onClick(templateRef)">Click Me</button>
  ```

### 6.7 模板语句

模板语句用于在模板中定义事件处理器。

```html

<button (click)="onClick($event)">Click Me</button>
```

```ts
export class AppComponent {
  onClick(event) {
    console.log(event);
  }
}
```

> (click) 语法是 Angular 的事件绑定语法，用于将DOM事件绑定到组件的事件处理器上。
> onClick($event) 语法是 Angular 的模板语句语法，用于在模板中定义事件处理器。
> $event 用于获取事件对象。
> $event 与 event 的区别是: $event 用于获取事件对象，而 event 用于获取事件处理器的参数。

### 6.8 模板表达式

模板表达式用于在模板中定义表达式。

```html
<h2>{{title}}</h2>
<h2>{{1+1}}</h2> <!-- 使用表达式 -->
<h2>{{true? 1+1 : title}}</h2> <!-- 使用三元表达式 -->
```

```ts
export class AppComponent {
  title = 'Angular';
}
```

### 6.9 模板指令

模板指令用于在模板中定义指令。

* ngIf 指令; 是直接影响元素是否被渲染，而非控制元素的显示和隐藏。

```html
<h2 *ngIf="title">ngIf 指令</h2>
<!-- ngIf 指令的 else 语法 -->
<h2 *ngIf="!title; else elseBlock">ngIf 指令</h2>
<ng-template #elseBlock>
  <h2>ngIf Else 指令</h2>
</ng-template>
<!-- ngIf 指令的 then 语法 -->
<h3 *ngIf="title; then thenBlock; else elseBlock"></h3>
<ng-template #thenBlock>
  <h2>ngIf Then 指令</h2>
</ng-template>
```

```ts
export class AppComponent {
  title = 'Angular';
}
```

```html
```

* ngFor 指令; 是用于遍历数组或对象。

```html

<ul>
  <li *ngFor="let item of items let i = index let odd = odd let even = even">
    {{i}} {{item}} {{odd}} {{even}}
</ul>
```

```ts
export class AppComponent {
  items = ['Angular', 'React', 'Vue'];
}
```

> 可用的变量有: item, index, first, last, even, odd。
> * item 用于获取当前遍历的元素。
> * index 用于获取当前遍历的索引。
> * first 用于判断当前遍历的元素是否是第一个元素。
> * last 用于判断当前遍历的元素是否是最后一个元素。
> * even 用于判断当前遍历的元素是否是偶数索引。
> * odd 用于判断当前遍历的元素是否是奇数索引。

* ngSwitch 指令

```html

<div [ngSwitch]="title">
  <h2 *ngSwitchCase="'Angular'">Hello Angular</h2>
  <h2 *ngSwitchCase="'React'">Hello React</h2>
  <h2 *ngSwitchCase="'Vue'">Hello Vue</h2>
  <h2 *ngSwitchDefault>Hello World</h2>
</div>
```

```ts
export class AppComponent {
  title = 'Angular';
}
```

* ngClass 指令

```html
<h2 [ngClass]="{red: title === 'Angular'}">Hello Angular</h2>
```

```ts
export class AppComponent {
  title = 'Angular';
}
```

```css
  .red {
  color: red;
}
```

* ngStyle 指令

```html
<h2 [ngStyle]="{color: title === 'Angular' ? 'red' : 'black'}">Hello Angular</h2>
```

```ts
export class AppComponent {
  title = 'Angular';
}
```

### 6.10 表单控件

使用 Angular 表单控件，可以轻松地实现表单的数据绑定、验证和错误处理。
[官方文档](https://angular.cn/api/forms/FormControl)

**注册响应式表单模块**

```ts
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  ..., // 其他配置
  imports: [
    ReactiveFormsModule
  ],
  ..., // 其他配置
})
export class AppModule {
}
```

* 生成 FormControl 实例

```ts
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent {
  name = new FormControl('');
}
```

> 使用 `new` 关键字生成一个新的 `FormControl` 实例，并把它保存在组件的 `name` 属性中。
> 此时，`name` 属性的值就是一个 `FormControl` 实例，它包含了表单控件的基本功能，比如获取表单控件的值、判断表单控件是否有效等。

* 绑定 FormControl 实例

```html
<label>
  Name:
  <input type="text" [formControl]="name">
</label>
<p>Value: {{name.value}}</p>
<button (click)="name.setValue('9999')">Clear</button>
```

**常用的 FormControl 属性**

* value: 获取表单控件的值。
* valid: 判断表单控件是否有效。
* invalid: 判断表单控件是否无效。
* valueChanges: 获取表单控件值的变化事件。
* isDisabled: 判断表单控件是否被禁用。
* isRequired: 判断表单控件是否是必填项。

**常用的 FormControl 方法**

* setValue: 设置表单控件的值。
* patchValue: 设置表单控件的值，但不会触发 `valueChanges` 事件。
* reset: 重置表单控件的值。
* disable: 禁用表单控件。
* enable: 启用表单控件。

**常用的 FormControl 事件**

* valueChanges: 获取表单控件值的变化事件。
* statusChanges: 获取表单控件状态的变化事件。

### 6.11 表单控件分组

- 表单中通常会包含几个相互关联的控件。响应式表单提供了两种把多个相关控件分组到同一个输入表单中的方法
  [官方文档](https://angular.cn/api/forms/FormGroup);

1. 创建一个 `FormGroup` 实例。
2. 把这个 `FormGroup` 模型关联到视图。
3. 保存表单数据。

* 生成 FormGroup 实例

```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    console.log(this.loginForm.value);
  }
}
```

* 绑定 FormGroup 实例

```html

<form [formGroup]="loginForm">
  <label>
    Username:
    <input type="text" formControlName="username">
  </label>
  <label>
    Password:
    <input type="password" formControlName="password">
  </label>
  <button type="submit" (click)="submit()">Submit</button>
</form>
```

### 6.12 表单验证

#### 6.12.1 引入表单验证模块

```ts
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  ..., // 其他配置
  imports: [
    ReactiveFormsModule
  ],
  ..., // 其他配置
})
export class AppModule {
}
```

#### 6.12.2 添加验证器

```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {
  formData = {
    name: '',
    password: ''
  };

  sub(name: NgModel) {
    console.log(name);
  }
}
```

#### 6.12.3 绑定验证器

```html

<form action="">
  <label>
    username:
    <input type="text" name="username" [(ngModel)]="formData.name" #nameInp="ngModel" required>
  </label>
  <span *ngIf="nameInp.invalid && (nameInp.dirty || nameInp.touched)">username is required</span>
  <label>
    password:
    <input type="password" name="password" [(ngModel)]="formData.password" #passInp="ngModel" required>
  </label>
  <span *ngIf="passInp.invalid && (passInp.dirty || passInp.touched)">password is required</span>
  <button (click)="sub(nameInp)">sub</button>
</form>
```

还可以通过 **ngModel** 跟踪修改状态与有效性验证，它使用了三个 CSS 类来更新控件，以便反映当前状态。

| 状态       | 为 true 时的类   | 为 false 时的类    |
|:---------|:-------------|:---------------|
| 控件已经被访问过 | `ng-touched` | `ng-untouched` |
| 控件值已经变化  | `ng-dirty`   | `ng-pristine`  |
| 控件值是有效的  | `ng-valid`   | `ng-invalid`   |

#### 6.12.4 自定义表单验证器

```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {
  constructor(
    private fb: FormBuilder
  ) {
  }

  validateForm = this.fb.group({
    username: [null, [Validators.required], Validators.maxLength(18), Validators.minLength(6)],
    password: [null, [Validators.required, this.passwordValidator]],
    phone: [null, [Validators.required, this.phoneValidator]],
  });


  private passwordValidator() {
    return (password: FormControl) => {
      const value = password.value || '';
      if (value === null) {
        return {msg: '密码不能为空'}
      }
      const valid = value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
      return valid ? null : {msg: '密码必须包含大小写字母和数字，且长度不小于8位'};
    };
  }

  private phoneValidator() {
    return (phone: FormControl) => {
      const value = phone.value || '';
      if (value === null) {
        return {msg: '手机号不能为空'}
      }
      const valid = value.match(/^1[3456789]\d{9}$/);
      return valid ? null : {msg: '手机号格式不正确'};
    };
  }

  sub2() {
    console.log(this.validateForm.value);
  }
}

```

```html
<h3>自定义表单验证</h3>
<form action="" [formGroup]="validateForm">
  <label>
    username:
    <input type="text" name="username" required formControlName="username">
  </label>
  <p *ngIf="validateForm.get('username')?.errors?.['required']">username is required</p>
  <label>
    password:
    <input type="password" name="password" required formControlName="password">
  </label>
  <label>
    phone:
    <input type="text" name="phone" required formControlName="phone">
  </label>
  <button (click)="sub2()">sub</button>
</form>
```

## 7. 服务(Service)

### 7.1 什么是服务

Angular中，把从组件内抽离出来的代码叫服务，服务的本质就是函数

官方认为组件不应该直接获取或保存数据，
它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。而服务就充当着数据访问，逻辑处理的功能。把组件和服务区分开，以提高模块性和复用性。
通过把组件中和视图有关的功能与其他类型的处理分离开，可以让组件类更加精简、高效。

### 7.2 服务的创建

使用命令`ng g s xxx`创建一个服务，通过`@Injectable()`装饰器标识服务。

```ts
//导入Injectable装饰器
import {Injectable} from '@angular/core';

//使用Injectable装饰器声明服务
@Injectable({
  //作用域设定，'root'表示默认注入，注入到AppModule里
  providedIn: 'root',
})
export class TestService {
}
```

### 7.3 服务的分类

- 根据服务的作用域，可以分为：应用级服务和组件级服务

> 应用级服务：在根模块中注入，整个应用都可以使用
> 组件级服务：在组件中注入，只能在当前组件中使用

- 根据服务的创建方式，可以分为：内置服务和自定义服务

> 内置服务：Angular提供的服务
> 自定义服务：自己创建的服务

- 根据服务的注入方式，可以分为：同步注入和异步注入

> 同步注入：在构造函数中注入
> 异步注入：在ngOnInit中注入

- 根据服务的生命周期，可以分为：单例服务和多例服务

> 单例服务：在整个应用中只有一个实例
> 多例服务：在每次使用时都会创建一个新的实例

- 根据服务的使用方式，可以分为：可注入服务和不可注入服务

> 可注入服务：可以在组件中注入
> 不可注入服务：不能在组件中注入

### 7.4 服务的注入

#### 7.4.1 同步注入

在组件的构造函数中注入服务，这种方式叫同步注入，同步注入的服务是单例的。

```ts
import {Component, OnInit} from '@angular/core';
import {TestService} from '../test.service';


```







