import { Component } from '@angular/core';
import { DefaultTaskServiceService } from './service/default-task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // public default_tasks = ['default_task1', 'default_task2'];
  /* An empty array that is responsible
	to add a division */

  public defaultTaskService = new DefaultTaskServiceService();

  public items: string[] = this.defaultTaskService.getDefaultTasks();

  /* A two-way binding performed which
	pushes text on division */
  public newTask: string = '';

  /* When input is empty, it will
	not create a new division */
  public addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  /* This function takes to input the
	task, that has to be deleted*/
  public deleteTask(index: number) {
    this.items.splice(index, 1);
  }
}
