import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSliderModule, MatCheckboxModule, MatSelectModule, MatButtonModule, MatIconModule, MatRadioModule, ReactiveFormsModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class CategoryDetailsComponent implements OnInit {
  contactForm = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateOfBirth: new FormControl(),
    ranking: new FormControl(),
    phone: new FormGroup({
      phoneNumber: new FormControl(),
      phoneType: new FormControl(),
    }),
    address: new FormGroup({
      addr: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl(),
      country: new FormControl()
    }),
    email: new FormGroup({
      emailAddr: new FormControl(),
      emailType: new FormControl()
    })
  })

  phones = [
    { name: 'Home', value: 'home' },
    { name: 'Work', value: 'work' },
    { name: 'Mobile', value: 'mobile' }
  ];
  email = [
    { name: '1', value: 'Personal' },
    { name: '2', value: 'Work' },
  ];

  countries = [
    { name: 'US', value: 'United States' },
    { name: 'IN', value: 'India' }
  ];

  states = [
    { name: 'NC', value: 'North Carolina' },
    { name: 'GA', value: 'Gergia' }
  ];


  IdParam?: any;
  constructor(private route: ActivatedRoute,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.IdParam = this.route.snapshot.paramMap.get('id');
    this.patchValues();
  }

  patchValues(): void {
    this.contactForm.controls.firstName.setValue("Santosh"),
      this.contactForm.controls.lastName.setValue('Bujala'),
      this.contactForm.controls.dateOfBirth.setValue('1985-06-08'),
      this.contactForm.controls.ranking.setValue('40'),
      this.contactForm.controls.phone.controls.phoneNumber.setValue('386-373-3745'),
      this.contactForm.controls.phone.controls.phoneType.setValue('mobile'),
      this.contactForm.controls.email.controls.emailAddr.setValue('test@test.co'),
      this.contactForm.controls.email.controls.emailType.setValue('1'),
      this.contactForm.controls.address.controls.addr.setValue('123 Test Ave'),
      this.contactForm.controls.address.controls.city.setValue('Charlotte'),
      this.contactForm.controls.address.controls.state.setValue('NC'),
      this.contactForm.controls.address.controls.zipcode.setValue('28262'),
      this.contactForm.controls.address.controls.country.setValue('US')
  }
  backButton(): void {
    this.router.navigate(['/welcome'])
  }
  saveDetails(): void {
    console.log(this.contactForm.value)
  }
}
