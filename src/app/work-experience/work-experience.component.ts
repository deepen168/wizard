import { Component, OnInit, Input } from '@angular/core';
import { WizardFormData } from '../models/wizard.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  @Input() experiences: WizardFormData['experiences'];

  constructor() { }

  ngOnInit(): void {
  }

  updateExperience1(event) {
    this.experiences.experience1 = event.target.value;
  }

  updateExperience2(event) {
    this.experiences.experience2 = event.target.value;
  }

  updateExperience3(event) {
    this.experiences.experience3 = event.target.value;
  }
}