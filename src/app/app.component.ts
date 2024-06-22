import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormatExpPipe } from "../shared/pipes/format-exp.pipe";
import { ChildInputComponent } from "../shared/components/child-input/child-input.component";
import { SetGetService } from '../shared/services/set-get.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, UpperCasePipe, NgClass, FormatExpPipe, ChildInputComponent]
})

export class AppComponent implements OnInit {
  title = 'Angular-Et';
  formatString = 'Test_Test1';
  inputPassing = 'Passing string from parent to child';
  childToParent!: string;
  constructor(public setget: SetGetService) { }
  ngOnInit(): void {
    this.setget.setFirstValue('Manvith Reddy Bujala');
  }
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
  displayOutput(value?: any): void {
    this.childToParent = value;
  }

}

export interface PersonsDetails {
  id: number,
  firstName: string,
  lastName: string
}
