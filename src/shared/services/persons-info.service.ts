import { Injectable } from '@angular/core';
import { PersonsDetails } from '../../app/app.component';

@Injectable({
  providedIn: 'root'
})
export class PersonsInfoService {

  constructor() { }
  getPersonsInformation(): PersonsDetails[] {
    return [{
      id: 1,
      firstName: 'Santosh Reddy',
      lastName: 'Bujala'
    },
    {
      id: 2,
      firstName: 'Swetha',
      lastName: 'Gangireddy'
    },
    {
      id: 3,
      firstName: 'Manvith Reddy',
      lastName: 'Bujala'
    }]
  }
}
