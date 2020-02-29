import { Component, OnInit, Input } from '@angular/core';
import { WizardFormData } from '../models/wizard.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  @Input() wizardFormData: WizardFormData;

  constructor() { }

  ngOnInit(): void {
  }

  updateEmail(event) {
    this.wizardFormData.email = event.target.value;
  }

  updateMobile(event) {
    this.wizardFormData.mobile = event.target.value;
  }

  updateCountry(event) {
    this.wizardFormData.country = event.target.value;
  }
}
