import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, UpperCasePipe, RouterModule]
})

export class AppComponent {
  title = 'Angular-Et';
}

export interface PersonsDetails {
  id: number,
  firstName: string,
  lastName: string
}
