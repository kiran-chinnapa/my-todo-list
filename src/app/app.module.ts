import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DefaultTaskServiceService } from './service/default-task-service.service';

@NgModule({
  declarations: [AppComponent, MyTasksComponent],
  imports: [BrowserModule, FormsModule, UserAuthModule],
  providers: [DefaultTaskServiceService],
  bootstrap: [AppComponent, MyTasksComponent],
})
export class AppModule {}
