import { Component, OnInit, Input } from '@angular/core';
import { WizardFormData } from '../models/wizard.model';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  @Input() wizardFormData: WizardFormData;

  constructor() { }

  ngOnInit(): void {
  }

  updateLastName(event) {
    this.wizardFormData.lastName = event.target.value;
  }

  updateFirstName(event) {
    this.wizardFormData.firstName = event.target.value;
  }

}
