import { Component } from '@angular/core';
import { DefaultTaskServiceService } from '../service/default-task-service.service';

@Component({
  selector: 'mytask-root',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
})
export class MyTasksComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public defaultTaskService = new DefaultTaskServiceService();

  /* An empty array that is responsible
	to add a division */
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
