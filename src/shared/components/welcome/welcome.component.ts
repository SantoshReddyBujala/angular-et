import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormatExpPipe } from '../../pipes/format-exp.pipe';
import { ChildInputComponent } from '../child-input/child-input.component';
import { SetGetService } from '../../services/set-get.service';
import { PersonsInfoService } from '../../services/persons-info.service';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterOutlet, UpperCasePipe, NgClass, FormatExpPipe, ChildInputComponent, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit, OnDestroy {
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
