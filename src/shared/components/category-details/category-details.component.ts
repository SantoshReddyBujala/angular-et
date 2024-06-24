import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent implements OnInit {
  IdParam?: any;
  constructor(private route: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.IdParam = this.route.snapshot.paramMap.get('id');
  }
  backButton(): void {
    this.router.navigate(['/welcome'])
  }
}
