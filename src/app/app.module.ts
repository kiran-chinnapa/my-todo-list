import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DefaultTaskServiceService } from './service/default-task-service.service';

@NgModule({
  declarations: [AppComponent, MyTasksComponent],
  imports: [BrowserModule, FormsModule],
  providers: [DefaultTaskServiceService],
  bootstrap: [AppComponent, MyTasksComponent],
})
export class AppModule {}
