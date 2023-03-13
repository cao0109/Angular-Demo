import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameEditorComponent} from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  // 声明组件: 用于声明当前项目运行的组件
  declarations: [
    AppComponent,
    HelloComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    MyPipePipe
  ],
  // 导入模块: 用于导入其它模块中的组件、指令、管道
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  // 服务提供商: 用于创建服务
  providers: [],
  // 启动组件: 用于指定应用的主视图 (称为根组件) 通过引导根 AppModule 来启动应用
  bootstrap: [AppComponent]
})
export class AppModule {
}
