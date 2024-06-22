import { NgClass, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormatExpPipe } from "../shared/pipes/format-exp.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, UpperCasePipe, NgClass, FormatExpPipe]
})

export class AppComponent {
  title = 'Angular-Et';
  formatString = 'Test_Test1';
  personsData: PersonsDetails[] = [{
    id: 1,
    firstName: 'Santosh',
    lastName: 'Bujala'
  },
  {
    id: 2,
    firstName: 'Swetha',
    lastName: 'Gangireddy'
  },
  {
    id: 3,
    firstName: 'Manvith',
    lastName: 'Bujala'
  }]

  onClick(val?: string): void {
    alert(val)
    console.log(val)
  }

}

export interface PersonsDetails {
  id: number,
  firstName: string,
  lastName: string
}
