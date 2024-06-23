import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormatExpPipe } from "../shared/pipes/format-exp.pipe";
import { ChildInputComponent } from "../shared/components/child-input/child-input.component";
import { SetGetService } from '../shared/services/set-get.service';
import { PersonsInfoService } from '../shared/services/persons-info.service';
import { CategoriesService } from '../shared/services/categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, UpperCasePipe, NgClass, FormatExpPipe, ChildInputComponent]
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular-Et';
  formatString = 'Test_Test1';
  inputPassing = 'Passing string from parent to child';
  childToParent!: string;
  personsData!: any;
  categoriesData: any;
  errMessage: any;
  sub!: Subscription;
  constructor(public setget: SetGetService,
    public personsInfo: PersonsInfoService,
    public categoriesSvc: CategoriesService
  ) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.setget.setFirstValue('Manvith Reddy Bujala');
    this.personsData = this.personsInfo.getPersonsInformation();
    this.sub = this.categoriesSvc.getCategories().subscribe({
      next: categories => {
        this.categoriesData = categories;
        console.log(this.categoriesData)
      },
      error: err => this.errMessage = err
    })

  }


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
