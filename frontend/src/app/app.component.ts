import { NewTaskListDialogComponent } from './feature/task/component/new-task-list-dialog/new-task-list-dialog.component';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'tod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterOutlet, RouterLink],
})
export class AppComponent {
  private readonly matDialog = inject(MatDialog);
  private readonly router = inject(Router);

  title = 'ToDo';

  newList() {
    const dialogRef = this.matDialog.open(NewTaskListDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((id: string) => {
      if (id) {
        this.router.navigate(['/tasklist', id]);
      }
    });
  }
}
