import { Component, OnInit, Type } from '@angular/core';
import { ComponentDetails, WizardFormData } from './models/wizard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  componentDetails: ComponentDetails = {
    personalDetailsComponent: {
      name: 'Personal Details',
      active: false
    },
    contactDetailsComponent: {
      name: 'Contact Details',
      active: false
    },
    skillsComponent: {
      name: 'Skills',
      active: false
    },
    workExperienceComponent: {
      name: 'Work Experience',
      active: false
    },
    confirmationComponent: {
      active: false
    }
  };

  wizardFormData: WizardFormData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    country: '',
    skills: {
      skill1: '',
      skill2: '',
      skill3: ''
    },
    experiences: {
      experience1: '',
      experience2: '',
      experience3: ''
    }
  };

  ngOnInit(): void {
    this.setComponentActive('personalDetailsComponent');
  };

  loadPersonalDetailComponent(): void {
    this.setComponentActive('personalDetailsComponent');
  }

  loadContactDetailsComponent(): void {
    this.setComponentActive('contactDetailsComponent');
  }

  loadSkillsComponent(): void {
    this.setComponentActive('skillsComponent');
  }

  loadWorkExperienceComponent(): void {
    this.setComponentActive('workExperienceComponent');
  }

  setNextorPreviousPageActive(nextOrBack: string): void {
    const activeComponentIndex = Object.keys(this.componentDetails).findIndex((component) => component === this.getCurrentPage());
    const addOrSubtract: number = (nextOrBack === 'next') ? 1 : -1;
    const nextPage = Object.keys(this.componentDetails)[activeComponentIndex + addOrSubtract];
    if (nextPage) {
      this.setComponentActive(nextPage);
    };
  }

  getCurrentPage(): string {
    for (const component in this.componentDetails) {
      if (this.componentDetails[component].active === true) {
        return component;
      }
    }
  }

  private setComponentActive(componentName: string): void {
    for (const component in this.componentDetails) {
      if (component === componentName) {
        this.componentDetails[component].active = true;
      } else {
        this.componentDetails[component].active = false;
      }
    }
  }

  submitForm(nextOrBack): void {
    console.log(this.wizardFormData);
    this.setNextorPreviousPageActive(nextOrBack);
  }

  startNewForm(): void {
    this.setComponentActive('personalDetailsComponent');
    location.reload();
  }
}